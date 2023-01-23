import { useContext } from "react";
import { Button } from "@mui/material";
import { purple } from "@mui/material/colors";

import { MovieContext } from "../../../context/MovieContext";

const NavLink = ({ btnText }) => {
  const { activeLink, setActiveLink } = useContext(MovieContext);

  return (
    <Button
      sx={{
        color: activeLink === btnText ? purple[600] : "#fff",
        transition: "all .3s linear",
        "&:hover": { color: purple[600], backgroundColor: "inherit" },
        fontWeight: "700",
        textAlign: "center",
      }}
      onClick={() => setActiveLink(btnText)}
    >
      {btnText}
    </Button>
  );
};

export default NavLink;
