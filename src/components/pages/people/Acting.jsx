import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { amber, cyan, lime, deepOrange } from "@mui/material/colors";
import { ArrowDropDown, KeyboardArrowDown } from "@mui/icons-material";
import CombinedCredits from "./CombinedCredits";
import MovieCredits from "./MovieCredits";
import TvCredits from "./TvCredits";

const options = ["all", "movies", "tv"];

const Acting = ({ combined_credits, movie_credits, tv_credits }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  let content;
  if (selectedIndex === 0) {
    content = (
      <CombinedCredits
        combinedCredits={combined_credits && combined_credits.cast}
      />
    );
  } else if (selectedIndex === 1) {
    content = <MovieCredits movieCredits={movie_credits.cast} />;
  } else if (selectedIndex === 2) {
    content = <TvCredits tvCredits={tv_credits.cast} />;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: 6,
        }}
      >
        <Typography variant="h5">Acting</Typography>
        <List component="nav" aria-label="select-item">
          <ListItem
            button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ textTransform: "capitalize", letterSpacing: 1 }}
          >
            <ListItemText secondary={options[selectedIndex]} />
            <ArrowDropDown />
          </ListItem>
        </List>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        variant="selectedMenu"
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
      {content}
    </>
  );
};
export default Acting;
