import { Box, Chip, Typography } from '@mui/material';

const GuestStarItemLength = ({ episode }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 2,
            my: 3
        }}>
            <Typography
                variant="h6"
                sx={{ letterSpacing: 1 }}>
                Gutest Stars
            </Typography>
            <Chip
                label={episode?.guest_stars.length}
                sx={{ background: 'linear-gradient(to right,#ED4700,#E76F00)' }}
                size="small"
            />
        </Box>
    );
}

export default GuestStarItemLength;