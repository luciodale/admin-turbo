import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@mui/material";

export function Users() {
  const { logout } = useAuth0();
  return (
    <Box
      onClick={() =>
        logout({
          logoutParams: { returnTo: window.location.origin },
        })
      }
      sx={{ p: 2, border: "1px dashed grey" }}
    >
      This is USERS under auth
    </Box>
  );
}
