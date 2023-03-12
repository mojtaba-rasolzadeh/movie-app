import { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const EpisodesMenu = ({ episodes, selectedIndex, setSelectedIndex }) => {

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
                    <ListItemText primary={
                        <Typography sx={{
                            fontWeight: 700,
                            background: 'linear-gradient(to right,#ED4700,#E76F00)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: 1,
                        }} >
                            Episodes
                        </Typography>
                    }
                    />
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
                {episodes.map((episode, index) => (
                    <MenuItem
                        key={episode}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                        sx={{ letterSpacing: 1 }}
                    >
                        episode {index + 1}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default EpisodesMenu;