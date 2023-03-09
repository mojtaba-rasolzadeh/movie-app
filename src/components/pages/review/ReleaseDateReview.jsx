import { Typography } from '@mui/material';

const ReleaseDateReview = ({ review }) => {
    return (
        <Typography
            component="p"
            variant="h6" sx={{
                fontWeight: 700,
                color: '#e76f00',
                letterSpacing: 1,
            }}>
            Written by
            <Typography
                component="span"
                variant="body1"
                sx={{ textDecoration: "none", color: 'text.secondary' }}>
                {" "}{review.author_details?.name ?
                    review.author_details.name : review.author_details?.username}{" "}
            </Typography>
            on {new Date(review.created_at)
                .toLocaleDateString("en-US",
                    { month: "long", day: "numeric", year: "numeric" })}
        </Typography>
    );
}

export default ReleaseDateReview;