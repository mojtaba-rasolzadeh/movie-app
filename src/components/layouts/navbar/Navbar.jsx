import { useState, cloneElement, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Box, AppBar, Toolbar, Avatar, useMediaQuery } from "@mui/material";

import Sidebar from "../sidebar/Sidebar";
import movieLogo from "../../../assets/movie-logo.png";
import { NavLinks, SearchInput, HamburgerMenuButton } from "./";

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Navbar = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    if (isMdUp) {
      setMobileOpen(false);
    }
  }, [isMdUp]);

  return (
    <Box sx={{ display: "flex" }}>
      <ElevationScroll {...props}>
        <AppBar component="nav">
          <Toolbar
            sx={{
              width: 1,
              mx: "auto",
              px: { xs: 5, sm: 4 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Avatar
                    variant="rounded"
                    sx={{ width: 40 }}
                    src={movieLogo}
                  />
                </Link>
                <NavLinks />
              </Box>
              <SearchInput />
              <HamburgerMenuButton
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </Box>
  );
};
export default Navbar;
