import { useState } from "react";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { yellow, teal } from "@mui/material/colors";
import { Link } from "react-router-dom";

const TvShowsMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "tvShows-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: yellow[500] }}
      >
        Tv Shows
      </Button>
      <Menu
        id="tvShow-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/tv" style={{ textDecoration: "none" }}>
            <Typography color="text.primary">Popular</Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/tv/airing-today" style={{ textDecoration: "none" }}>
            <Typography color="text.primary">Airing Today</Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/tv/on-the-air" style={{ textDecoration: "none" }}>
            <Typography color="text.primary">On Tv</Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/tv/top-rated" style={{ textDecoration: "none" }}>
            <Typography color="text.primary">Top Rated</Typography>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};
export default TvShowsMenu;
