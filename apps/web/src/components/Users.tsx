import { Box } from "@mui/material";
import { useMemo } from "react";
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from "mantine-react-table";
import { useSubscription } from "urql";
import { graphql } from "../gql/gql";

const UsersTableSub = graphql(/* GraphQL */ `
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
`);

function useUsers() {
  const [res] = useSubscription(
    { query: UsersTableSub, variables: { org: 7 } },
    (_messages, response) => response
  );
  return res;
}

function UsersTable({ data }: { data: TUser[] }) {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<TUser>[]>(
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
        accessorFn: (row) => row.roles.join(","),
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

type TUser = NonNullable<
  ReturnType<typeof useUsers>["data"]
>["folio_user"][number];

export function Users() {
  const res = useUsers();
  const { data, fetching, error } = res;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <Box sx={{ p: 2 }}>
      {data?.folio_user && <UsersTable data={data.folio_user} />}
    </Box>
  );
}
