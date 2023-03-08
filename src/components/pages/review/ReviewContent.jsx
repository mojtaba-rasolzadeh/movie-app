import { Typography } from "@mui/material";

const ReviewContent = ({ review }) => {
    return (
        <>
            {review.content?.split('\n').map((content, index) => (
                <Typography
                    key={index}
                    variant="body1"
                    sx={{ letterSpacing: 1, mt: 1, fontWeight: 300, textAlign: 'justify', color: 'text.secondary' }}>
                    {content}
                </Typography>
            ))
            }
        </>
    );
}

export default ReviewContent;