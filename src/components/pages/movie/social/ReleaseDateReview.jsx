import { Typography } from "@mui/material";

const ReleaseDateReview = ({ review }) => {
    return (
        <Typography variant="body2" component="p" sx={{ letterSpacing: 1, color: '#e76f00' }}>
            Written by{" "}
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: "700" }}>
                {review.author}
            </Typography>
            {" "}on{" "}
            {new Date(review.created_at).toLocaleDateString(
                "en-US",
                { month: "long", day: "numeric", year: "numeric" }
            )}
        </Typography>
    );
}

export default ReleaseDateReview;