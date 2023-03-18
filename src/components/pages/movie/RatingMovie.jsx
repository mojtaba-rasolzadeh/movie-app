import { Rating } from "@mui/material";

const RatingMovie = ({ vote_average }) => {
    return (
        <Rating sx={{
            flexWrap: 'wrap',
            mt: { xs: 2, lg: 3 }
        }}
            name="half-rating-read"
            value={vote_average}
            precision={0.5}
            max={10}
            readOnly size="small" />
    );
}

export default RatingMovie;