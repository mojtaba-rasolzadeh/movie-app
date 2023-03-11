import { Box } from "@mui/material";

import { ReleaseDateReview, ReviewRating, ReviewAuthor } from './';

const AuthorDetails = ({ review }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                alignItems: "center",
            }}>
                <ReviewAuthor review={review} />
                <ReviewRating review={review} />
            </Box>
            <ReleaseDateReview review={review} />
        </Box>
    );
}

export default AuthorDetails;