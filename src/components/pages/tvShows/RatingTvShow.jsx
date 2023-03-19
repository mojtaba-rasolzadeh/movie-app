import { Box, Rating, Typography } from "@mui/material";

const RatingMovie = ({ vote_average }) => {
    return (
        <Box sx={{ mt: { xs: 2, lg: 2 } }}>
            <Typography
                variant="body1"
                sx={{ letterSpacing: 1 }}>
                {vote_average?.toFixed(1)}
            </Typography>
            <Rating sx={{ flexWrap: 'wrap' }}
                name="half-rating-read"
                value={vote_average}
                precision={0.5}
                max={10}
                readOnly />
        </Box>
    );
}

export default RatingMovie;