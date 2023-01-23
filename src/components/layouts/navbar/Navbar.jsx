import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import { MenuRounded } from "@mui/icons-material";

import { Sidebar } from "../../";
import { MovieMenu, TvShowsMenu, PeopleMenu } from "./";
import SearchButton from "./SearchButton";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar
          sx={{
            width: { xs: "auto", sm: 564, md: 864, lg: 1164, xl: 1500 },
            mx: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  display: { xs: "block", sm: "none", md: "block" },
                  fontSize: { xs: "18px", md: "24px" },
                  fontWeight: "900",
                  color: purple[600],
                }}
              >
                MovieApp
              </Typography>
            </Link>

            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                gap: { sm: 0, md: 2 },
                alignItems: "center",
              }}
            >
              <MovieMenu />
              <TvShowsMenu />
              <PeopleMenu />
            </Box>

            <SearchButton />
            <IconButton
              aria-label="menu"
              sx={{ display: { sm: "none" }, color: purple[600] }}
              onClick={handleDrawerToggle}
            >
              <MenuRounded sx={{ fontSize: "2rem" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </Box>
  );
};
export default Navbar;
