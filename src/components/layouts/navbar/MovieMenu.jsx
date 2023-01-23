import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";

const MovieMenu = () => {
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
        aria-controls={open ? "movie-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: yellow[500] }}
      >
        Movies
      </Button>
      <Menu
        id="movie-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/movie" style={{ textDecoration: "none" }}>
            <Typography color="text.primary">Popular</Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/movie/now_playing" style={{ textDecoration: "none" }}>
            <Typography color="text.primary">Now Playing</Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/movie/top_rated" style={{ textDecoration: "none" }}>
            <Typography color="text.primary">Top Rated</Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/movie/upcoming" style={{ textDecoration: "none" }}>
            <Typography color="text.primary">Upcoming</Typography>
          </Link>
        </MenuItem>
      </Menu>
      <Outlet />
    </div>
  );
};
export default MovieMenu;
