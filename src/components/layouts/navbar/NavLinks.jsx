import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { grey, pink } from '@mui/material/colors';

const NavLinks = () => {

    return (
        <Box
            sx={{
                display: { xs: "none", sm: "flex" },
                gap: 3,
                alignItems: "center",
            }}
        >
            <NavLink to={`/movie`} style={{ textDecoration: 'none' }}>
                {({ isActive }) => (
                    <Typography sx={{ fontWeight: 700, pb: '1px', letterSpacing: 1, color: isActive ? grey[100] : grey[600], borderBottom: `${isActive ? `2px solid ${pink[500]}` : 'none'}`, '&:hover': { color: grey[100] } }}>
                        Movies
                    </Typography>
                )}
            </NavLink>
            <NavLink to={`/tv`} style={{ textDecoration: 'none' }}>
                {({ isActive }) => (
                    <Typography sx={{ fontWeight: 700, pb: '1px', letterSpacing: 1, color: isActive ? grey[100] : grey[600], borderBottom: `${isActive ? `2px solid ${pink[500]}` : 'none'}`, '&:hover': { color: grey[100] } }}>
                        Tv Shows
                    </Typography>
                )}
            </NavLink>
            <NavLink to={`/person`} style={{ textDecoration: 'none' }}>
                {({ isActive }) => (
                    <Typography sx={{ fontWeight: 700, pb: '1px', letterSpacing: 1, color: isActive ? grey[100] : grey[600], borderBottom: `${isActive ? `2px solid ${pink[500]}` : 'none'}`, '&:hover': { color: grey[100] } }}>
                        People
                    </Typography>
                )}
            </NavLink>
        </Box>
    )
}
export default NavLinks;