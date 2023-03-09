import { Box, Chip, Typography } from '@mui/material';
import { StarRateRounded } from "@mui/icons-material";

const ReviewTitle = ({ review }) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 3 }}>
            <Typography component="p" variant="h6" sx={{
                fontWeight: 700,
                background: 'linear-gradient(to right,#ED4700,#E76F00)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: 1,
            }}>
                Written by
                <Typography component="span" variant="body1" sx={{ textDecoration: "none", color: 'text.secondary' }}>
                    {" "}{review.author_details?.name ? review.author_details.name : review.author_details?.username}{" "}
                </Typography>
                on {new Date(review.created_at)
                    .toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </Typography>
            {review.author_details?.rating !== null && (
                <Chip
                    icon={<StarRateRounded fontSize="small" />}
                    label={`${review.author_details?.rating}.0`}
                    size="small"
                    sx={{ gap: "0.25rem", padding: ".9rem .4rem" ,background: 'linear-gradient(to right,#ED4700,#E76F00)'}}
                />
            )}
        </Box>
    );
}

export default ReviewTitle;