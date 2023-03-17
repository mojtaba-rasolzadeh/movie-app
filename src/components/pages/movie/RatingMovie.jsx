import { Box, Rating, Typography, Link } from "@mui/material";

const RatingMovie = ({ imdb_id, vote_average }) => {
    return (
        <Box sx={{ mt: { xs: 2, md: 1, lg: 3 } }}>
            <Link href={`https://m.imdb.com/title/${imdb_id}`} style={{ textDecoration: 'none' }} target="_blank">
                <Typography varaint="body1" sx={{
                    color: "#fff",
                    "&:hover": { color: "text.secondary" },
                    letterSpacing: 1
                }} gutterBottom>IMDB</Typography>
            </Link>
            <Rating sx={{ flexWrap: 'wrap' }} name="half-rating-read" value={vote_average} precision={0.5} max={10} readOnly size="small" />
        </Box>
    );
}

export default RatingMovie;