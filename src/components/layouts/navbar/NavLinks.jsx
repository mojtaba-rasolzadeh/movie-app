import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { grey, pink } from "@mui/material/colors";

const NavLinks = () => {
  const links = [
    {
      text: "Movies",
      href: "/movie",
    },
    {
      text: "Tv Shows",
      href: "/tv",
    },
    {
      text: "People",
      href: "/person",
    },
  ];

  return (
    <Box
      sx={{
        display: { xs: "none", sm: "flex" },
        gap: 3,
        alignItems: "center",
      }}
    >
      {links.map((link, index) => (
        <NavLink key={index} to={link.href} style={{ textDecoration: "none" }}>
          {({ isActive }) => (
            <Typography
              sx={{
                fontWeight: 700,
                pb: "1px",
                letterSpacing: 1,
                color: isActive ? grey[100] : grey[600],
                borderBottom: `${isActive ? `2px solid ${pink[500]}` : "none"}`,
                "&:hover": { color: grey[100] },
              }}
            >
              {link.text}
            </Typography>
          )}
        </NavLink>
      ))}
    </Box>
  );
};
export default NavLinks;
