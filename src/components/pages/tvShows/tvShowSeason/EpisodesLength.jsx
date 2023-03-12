import { Box, Chip, Typography } from '@mui/material';

const EpisodesLength = ({episodes}) => {
    return (
        <Box mb={2} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                    fontWeight: 700,
                    background: 'linear-gradient(to right,#ED4700,#E76F00)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: 1,
                }}>
                Episodes
            </Typography>
            <Chip
                label={episodes?.length}
                sx={{ background: 'linear-gradient(to right,#ED4700,#E76F00)' }}
            />
        </Box>
    );
}

export default EpisodesLength;