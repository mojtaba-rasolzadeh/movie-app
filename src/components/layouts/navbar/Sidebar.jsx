import {
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import { Stars, Duo } from "@mui/icons-material";

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
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
          <List>
            <ListItem disablePadding sx={{ textAlign: "center" }}>
              <ListItemText>
                <Typography
                  sx={{
                    color: purple[600],
                    fontSize: "1.5rem",
                    fontWeight: "900",
                    py: 1,
                    letterSpacing: 2,
                  }}
                >
                  MovieApp
                </Typography>
              </ListItemText>
            </ListItem>
            <Divider sx={{ my: 2 }} />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Stars color="error" />
                </ListItemIcon>
                <ListItemText primary="Popular" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Duo color="info" />
                </ListItemIcon>
                <ListItemText primary="All Movies" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
