import { Box, Chip, Typography } from '@mui/material';

const CrewItemLength = ({ episode }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 2,
            margin:'1.5rem 0 .5rem 0'
        }}>
            <Typography
                variant="h6"
                sx={{ fontWeight: 700,
                    background: 'linear-gradient(to right,#ED4700,#E76F00)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: 1, }}>
                Crews
            </Typography>
            <Chip
                label={episode?.crew.length}
                sx={{ background: 'linear-gradient(to right,#ED4700,#E76F00)' }}
                size="small"
            />
        </Box>
    );
}

export default CrewItemLength;