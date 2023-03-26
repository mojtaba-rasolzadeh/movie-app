import { Box, Chip, Typography } from '@mui/material';

const CrewItemLength = ({ episode }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 2,
            margin: '1.5rem 0 .5rem 0'
        }}>
            <Typography
                variant="h6"
                sx={{ letterSpacing: 1 }}>
                Crews
            </Typography>
            <Chip
                label={episode?.crew.length}
                variant='outlined'
            />
        </Box>
    );
}

export default CrewItemLength;