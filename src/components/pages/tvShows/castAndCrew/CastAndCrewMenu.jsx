import { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const options = ['series actors', 'series crews'];

const CastAndCrewMenu = ({ selectedIndex, setSelectedIndex }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }
    
    return (
        <div>
            <List component="nav" sx={{ bgcolor: 'background.paper' }}>
                <ListItem
                    button
                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickListItem}
                    sx={{ display: 'flex', alignItems: 'center', gap: 1, borderRadius: 1 }}
                >
                    <ListItemText secondary={<Typography sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>{options[selectedIndex]}</Typography>} />
                    <ListItemIcon sx={{ minWidth: 0 }}>
                        {open ? <ExpandLess fontSize='small' /> : <ExpandMore fontSize='small' />}
                    </ListItemIcon>
                </ListItem>
            </List>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                }}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                        sx={{ letterSpacing: 1, textTransform: 'capitalize' }}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default CastAndCrewMenu;