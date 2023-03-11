import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const ReviewContent = ({ review }) => {
    return (
        <Box sx={{ mt: 5 }}>
            <Typography variant="body1" sx={{ fontWeight: "300" }}>
                {review.content.slice(0, 287)}
                {review.content.length > 287 &&
                    <Link to={`/review/${review.id}`}>
                        <Typography
                            sx={{
                                display: "inline-block",
                                fontWeight:700,
                                background: 'linear-gradient(to right,#ED4700,#E76F00)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            {" "}... read the rest.
                        </Typography>
                    </Link>}
            </Typography>
        </Box>
    );
}

export default ReviewContent;