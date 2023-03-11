import { Chip, Typography } from "@mui/material";

const ReviewsLength = ({ reviews }) => {
    return (
        <Chip
            label={
                <Typography
                    variant="caption"
                    component="span"
                    color="text.secondary"
                    sx={{ fontWeight: "700" }}
                >
                    {reviews?.results.length}
                </Typography>
            }
            size="small"
            sx={{ px: 0.75, background: 'linear-gradient(to right,#ED4700,#E76F00)' }}
        />
    );
}

export default ReviewsLength;