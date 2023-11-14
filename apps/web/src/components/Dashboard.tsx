import { Box } from "@mui/material";
import { Outlet } from "@tanstack/react-router";

export function Dashboard() {
  return (
    <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
      This is a section container Dashboard
      <Outlet />
    </Box>
  );
}
