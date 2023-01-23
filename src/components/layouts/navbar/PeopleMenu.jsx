import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";

const PeopleMenu = () => {
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
        aria-controls={open ? "people-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: yellow[500] }}
      >
        People
      </Button>
      <Menu
        id="people-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/person" style={{ textDecoration: "none" }}>
            <Typography color="text.primary">Popular People</Typography>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};
export default PeopleMenu;
