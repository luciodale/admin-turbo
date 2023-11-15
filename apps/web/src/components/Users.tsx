import { Box } from "@mui/material";
import { useMemo } from "react";
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from "mantine-react-table";
import { gql, useQuery } from "urql";

function UsersTable({ data }) {
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

export function Users() {
  const [result] = useQuery({
    query: UsersTableQuery,
    variables: { org: 7 },
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <Box sx={{ p: 2 }}>
      <UsersTable data={data.folio_user} />
    </Box>
  );
}
