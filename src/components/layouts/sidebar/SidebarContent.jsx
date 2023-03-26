import { Link } from "react-router-dom";
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { PeopleOutlineRounded, LiveTvRounded, MovieFilterRounded } from "@mui/icons-material";

const SidebarContent = () => {
    const links = [
        {
            text: 'Movies',
            icon: <MovieFilterRounded color="error" />,
            href: '/movie'
        },
        {
            text: 'Tv Shows',
            icon: <LiveTvRounded color="info" />,
            href: '/tv'
        },
        {
            text: 'People',
            icon: <PeopleOutlineRounded color="secondary" />,
            href: '/person'
        },
    ];

    return (
        <>
            {
                links.map((link, index) => (
                    <ListItem key={index} disablePadding>
                        <Link to={link.href} style={{ textDecoration: 'none', width: '100%' }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {link.icon}
                                </ListItemIcon>
                                <ListItemText primary={link.text} sx={{ color: '#fff' }} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))
            }
        </>
    );
}

export default SidebarContent;