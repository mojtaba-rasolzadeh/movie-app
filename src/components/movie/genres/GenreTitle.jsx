import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Chip,
  Button,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import { teal, lime } from "@mui/material/colors";
import { ArrowDropDown } from "@mui/icons-material";

const GenreTitle = ({ genre, movies,tv,genreType, setGenreType }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = ["Select Item", "Movies", "Tv Shows"];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        my: 3,
      }}
    >
      <Link
        href={`/genre/${genre.id}-${genre.name
          .split(" ")
          .join("-")
          .toLowerCase()}/movie`}
        style={{ textDecoration: "none" }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: 700,
            letterSpacing: 2,
            color: teal[400],
            "&:hover": {
              color: teal[500],
            },
          }}
        >
          {genre.name}
        </Typography>
      </Link>
      <Box>
        <div>
          <List
            component="nav"
            aria-label="Genre type"
            sx={{ bgcolor: "background.paper" }}
          >
            <ListItem
              button
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText primary={options[selectedIndex]} />
              <ListItemIcon sx={{ minWidth: 0 }}>
                <ArrowDropDown fontSize="small" />
              </ListItemIcon>
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                disabled={index === 0}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                <Link
                  to={`/genre/${genre.id}-${genre.name.toLowerCase()}/${
                    index === 1 ? "movie" : "tv"
                  }`}
                  style={{ textDecoration: "none" }}
                  onClick={() => setGenreType(option)}
                >
                  <Typography sx={{ color: "#fff" }}>{option}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Box>
      <Chip
        label={
          genreType === "Movies" ?
          <Typography variant="body1">
            {movies.total_results.toLocaleString()} movies
          </Typography> : <Typography variant="body1">
            {tv.total_results.toLocaleString()} shows
          </Typography>
        }
        color="secondary"
      />
    </Box>
  );
};

export default GenreTitle;
