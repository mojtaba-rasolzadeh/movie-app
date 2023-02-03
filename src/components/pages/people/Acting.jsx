import { useState } from "react";
import {
  Box,
  Typography,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { lime, yellow } from "@mui/material/colors";
import { ArrowDropDown } from "@mui/icons-material";

import CombinedCredits from "./CombinedCredits";
import MovieCredits from "./MovieCredits";
import TvCredits from "./TvCredits";

// const options = ["all", "movies", "tv"];

const Acting = ({ combined_credits, movie_credits, tv_credits }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const options = [
    // "all", "movies", "tv"
    {
      menuLabel: "all",
      creditsLength: combined_credits && combined_credits.cast.length,
    },
    {
      menuLabel: "movies",
      creditsLength: movie_credits && movie_credits.cast.length,
    },
    {
      menuLabel: "tv",
      creditsLength: tv_credits && tv_credits.cast.length,
    },
  ];

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
          my: 2,
        }}
      >
        <Typography variant="h5" sx={{ color: yellow[200] }}>
          Acting
        </Typography>
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
            {/* <ListItemText secondary={options[selectedIndex].menuLabel}> */}
            <ListItemText sx={{color:lime[500]}}>{options[selectedIndex].menuLabel}</ListItemText>
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
            {option.menuLabel}
            <Typography variant="caption" color="text.secondary" sx={{mt:'4px'}}>
              {option.creditsLength}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
      {content}
    </>
  );
};
export default Acting;
