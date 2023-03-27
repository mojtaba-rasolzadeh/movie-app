import { MenuRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const HamburegerMenuButton = ({ mobileOpen, handleDrawerToggle }) => {
  return (
    <>
      {!mobileOpen && (
        <IconButton
          sx={{ display: { sm: "none" } }}
          size="large"
          aria-label="menu"
          onClick={handleDrawerToggle}
        >
          <MenuRounded />
        </IconButton>
      )}
    </>
  );
};

export default HamburegerMenuButton;

// {!mobileOpen && (
//   <IconButton
//     sx={{ display: { sm: "none" } }}
//     size="large"
//     aria-label="menu"
//     className={`hamburger ${mobileOpen ? "open" : null} md:hidden`}
//     onClick={handleDrawerToggle}
//   >
//     <span className="hamburger-top"></span>
//     <span className="hamburger-middle"></span>
//     <span className="hamburger-bottom"></span>
//   </IconButton>
// )}
