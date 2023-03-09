import { Box } from '@mui/material';

import { ReleaseDateReview, ReviewRating } from './';

const AuthorDetails = ({ review }) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 3 }}>
            <ReleaseDateReview review={review} />
            <ReviewRating review={review} />
        </Box>
    );
}

export default AuthorDetails;