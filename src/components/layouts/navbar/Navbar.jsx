import { useState, cloneElement } from "react";
import { Box, AppBar, Toolbar, IconButton } from "@mui/material";
import { purple } from "@mui/material/colors";
import { MenuRounded } from "@mui/icons-material";
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import { Sidebar } from "../../";
import SearchInput from "./SearchInput";
import NavLinks from "./NavLinks";
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

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Navbar = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <ElevationScroll {...props}>
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
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
              <NavLinks />
              <SearchInput />
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
      </ElevationScroll>
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </Box >
  );
};
export default Navbar;
