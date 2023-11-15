import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import { Link, Outlet } from "@tanstack/react-router";
import { useAuth0 } from "@auth0/auth0-react";

const navLinks = [
  { label: "Users", to: "/users" },
  { label: "Permissions", to: "/permissions" },
  { label: "Exchange Reports", to: "/exchange-reports" },
];

export function Dashboard() {
  const { logout, user } = useAuth0();
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              <Box sx={{ display: "flex", gap: 4 }}>
                {navLinks.map(({ label, to }) => (
                  <Link
                    key={to}
                    to={to}
                    style={{ textDecoration: "none" }}
                    inactiveProps={{ style: { opacity: 0.5 } }}
                    activeProps={{ style: { opacity: 1, fontSize: 30 } }}
                  >
                    <Typography
                      component="div"
                      sx={{ color: "white", textTransform: "uppercase" }}
                    >
                      {label}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ p: 1 }}
                >
                  <PersonIcon />
                </IconButton>

                {user?.nickname}
              </Box>
              <Button
                color="inherit"
                onClick={() =>
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  })
                }
              >
                Logout
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </Box>
  );
}
