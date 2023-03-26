import { Box, Chip, Typography } from '@mui/material';

const EpisodesLength = ({ episodes }) => {
    return (
        <Box mb={2} sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2
        }}>
            <Typography
                variant="h5"
                sx={{ letterSpacing: 1 }}>
                Episodes
            </Typography>
            <Chip
                label={episodes?.length}
                variant="outlined"
            />
        </Box>
    );
}

export default EpisodesLength;