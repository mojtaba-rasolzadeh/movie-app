import { Box, Chip, Typography } from "@mui/material";

const CollectionMoviesLength = ({ parts }) => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 3,
            mt: 4
        }}>
            <Typography variant="h6">Movies</Typography>
            <Chip label={parts?.length} variant="outlined" />
        </Box>
    );
}

export default CollectionMoviesLength;