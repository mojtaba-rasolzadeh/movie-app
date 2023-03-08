import { Box, Chip, Typography } from '@mui/material';
import { StarRateRounded } from "@mui/icons-material";

import { yellow } from '@mui/material/colors';

const ReviewTitle = ({ review }) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 3 }}>
            <Typography component="p" variant="h6" sx={{ letterSpacing: 1 }}>
                Written by
                <Typography component="span" variant="body1" sx={{ textDecoration: "none", color: 'text.secondary' }}>
                    {" "}{review.author_details?.name ? review.author_details.name : review.author_details?.username}{" "}
                </Typography>
                on {new Date(review.created_at)
                    .toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </Typography>
            {review.author_details?.rating !== null && (
                <Chip
                    icon={<StarRateRounded fontSize="small" sx={{ color: yellow['A700'] }} />}
                    label={`${review.author_details?.rating}.0`}
                    size="small"
                    sx={{ gap: "0.25rem", padding: ".9rem .4rem" }}
                />
            )}
        </Box>
    );
}

export default ReviewTitle;