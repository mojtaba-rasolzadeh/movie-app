import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const ReviewAuthor = ({ review }) => {
    return (
        <Link to={`/review/${review.id}`} style={{ textDecoration: "none" }}>
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 700,
                    background: 'linear-gradient(to right,#ED4700,#E76F00)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: 1,
                }}
            >
                A review by {review.author}
            </Typography>
        </Link>
    );
}

export default ReviewAuthor;