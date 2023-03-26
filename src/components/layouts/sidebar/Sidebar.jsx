import { Box, Drawer, List, Divider } from "@mui/material";

import { SidebarHeader, SidebarContent } from "./";

const Sidebar = ({ mobileOpen, handleDrawerToggle, container }) => {

  return (
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .muiDrawer-paper": { boxSizing: "border-box", width: 240 },
          '& .MuiDrawer-paper': { maxWidth: 280, width: 1 }
        }}
      >
        <Box onClick={handleDrawerToggle}
          sx={{ textAlign: "center" }}>
          <List>
            <SidebarHeader />
            <Divider sx={{ mt: 3, mb: 4 }} />
            <SidebarContent />
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
