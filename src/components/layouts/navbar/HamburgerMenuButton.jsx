import { IconButton } from "@mui/material";

const HamburegerMenuButton = ({ mobileOpen, handleDrawerToggle }) => {
  return (
    <IconButton
      sx={{ display: { sm: "none" } }}
      size="large"
      aria-label="menu"
      className={`hamburger ${mobileOpen ? "open" : null} md:hidden`}
      onClick={handleDrawerToggle}
    >
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </IconButton>
  );
};

export default HamburegerMenuButton;
