import { Box } from "@mui/material";
import { useMemo } from "react";
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from "mantine-react-table";
import { gql, useSubscription } from "urql";
import { UserPermissionsSubscription } from "../gql/graphql";

type TableColumns = UserPermissionsSubscription["folio_user"][number];

function UsersTable({
  data,
}: {
  data: UserPermissionsSubscription["folio_user"];
}) {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<TableColumns>[]>(
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

export function Users() {
  const [res] = useSubscription<UserPermissionsSubscription>(
    { query: UsersTableSub, variables: { org: 7 } },
    (_messages, response) => response
  );

  const { data, fetching, error } = res;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <Box sx={{ p: 2 }}>
      {data?.folio_user && <UsersTable data={data.folio_user} />}
    </Box>
  );
}
