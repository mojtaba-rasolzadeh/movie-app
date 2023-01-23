import { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  MoreHoriz,
  ListRounded,
  FavoriteRounded,
  BookmarkRounded,
  StarRateRounded,
  PlayArrowRounded,
} from "@mui/icons-material";

const MoreButton = () => {
  let iconT = "ListRounded";
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    {
      text: "Add to list",
      icon: <ListRounded />,
    },
    {
      text: "Favorite",
      icon: <FavoriteRounded />,
    },
    {
      text: "Watchlist",
      icon: <BookmarkRounded />,
    },
    {
      text: "Your rating",
      icon: <StarRateRounded />,
    },
  ];

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ position: "absolute", right: "0" }}
      >
        <MoreHoriz />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{ "aria-labelledby": "long-button" }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} onClick={handleClose}>
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemText>{option.text}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
export default MoreButton;
