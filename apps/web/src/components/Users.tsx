import { Box } from "@mui/material";
import { useMemo } from "react";
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from "mantine-react-table";
import { gql, useQuery, useSubscription } from "urql";

function UsersTable({ data }) {
  console.log("data in user table", data);
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorFn: (row) => `${row.firstname} ${row.lastname}`,
        header: "Name",
      },
      {
        accessorKey: "username",
        header: "Username",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorFn: (row) => row?.roles?.join(","),
        header: "Roles",
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data,
    enableColumnOrdering: true,
  });

  return <MantineReactTable table={table} />;
}

const UsersTableSub = gql`
  subscription UserPermissions($org: Int!) {
    folio_user(
      where: { organisation: { _eq: $org } }
      order_by: { firstname: asc, lastname: asc }
    ) {
      id
      firstname
      lastname
      username
      email
      roles
      blocked
      sessions {
        last_seen
      }
      permissions {
        id
        permission
        packageByPackage {
          id
          name
          sourceBySource {
            name
          }
        }
      }
    }
  }
`;

const UsersTableQuery = gql`
  query UserPermissions($org: Int!) {
    folio_user(
      where: { organisation: { _eq: $org } }
      order_by: { firstname: asc, lastname: asc }
    ) {
      id
      firstname
      lastname
      username
      email
      roles
      blocked
      sessions {
        last_seen
      }
      permissions {
        id
        permission
        packageByPackage {
          id
          name
          sourceBySource {
            name
          }
        }
      }
    }
  }
`;

const handleSubscription = (messages = [], response) => {
  return response.folio_user;
};

export function Users() {
  const [result] = useQuery({
    query: UsersTableQuery,
    variables: { org: 7 },
  });

  console.log("this is a normal query", result);

  const [res] = useSubscription(
    { query: UsersTableSub, variables: { org: 7 } },
    handleSubscription
  );

  const { data, fetching, error } = res;
  console.log("data", data);

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return <Box sx={{ p: 2 }}>{data?.length && <UsersTable data={data} />}</Box>;
}
