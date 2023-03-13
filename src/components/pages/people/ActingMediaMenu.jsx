import { useState } from "react";
import {
    Menu,
    MenuItem,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import { yellow } from "@mui/material/colors";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const options = ["all", "movies", "tv"];

const ActingMediaMenu = ({ selectedIndex, setSelectedIndex }) => {
    const [anchorEl, setAnchorEl] = useState(null);
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
    return (
        <>
            <List component="nav" aria-label="select-item">
                <ListItem
                    button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{ textTransform: "capitalize", letterSpacing: 1, gap: 1, alignItems: 'center' }}
                >
                    <ListItemText sx={{ fontWeight: 700, color: yellow[700] }}>{options[selectedIndex]}</ListItemText>
                    {open ? <ExpandLess fontSize='small' /> : <ExpandMore fontSize='small' />}
                </ListItem>
            </List>
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
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}

export default ActingMediaMenu;