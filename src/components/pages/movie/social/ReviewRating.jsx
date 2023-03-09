import { Chip } from "@mui/material";
import { StarRateRounded } from "@mui/icons-material";

const ReviewRating = ({ review }) => {
    return (
        <>
            {review.author_details?.rating !== null && (
                <Chip
                    icon={<StarRateRounded fontSize="small" />}
                    label={`${review.author_details.rating}.0`}
                    size="small"
                    sx={{
                        gap: "0.25rem",
                        padding: ".9rem .4rem",
                        background: 'linear-gradient(to right,#ED4700,#E76F00)'
                    }}
                />
            )}
        </>
    );
}

export default ReviewRating;