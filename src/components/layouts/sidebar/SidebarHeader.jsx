import { Link } from "react-router-dom";
import { ListItem, ListItemText, Avatar, IconButton } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";

import movieLogo from "../../../assets/movie-logo.png";

const SidebarHeader = () => {
  return (
    <ListItem sx={{ mt: ".5rem" }}>
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
          textDecoration: "none",
          width: "100%",
        }}
      >
        <Avatar variant="rounded" sx={{ width: 40 }} src={movieLogo} />
        <ListItemText primary="Movie App" sx={{ color: "#fff" }} />
      </Link>
      <IconButton>
        <CloseRounded />
      </IconButton>
    </ListItem>
  );
};

export default SidebarHeader;
