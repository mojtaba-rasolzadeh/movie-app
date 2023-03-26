import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const ReviewContent = ({ review }) => {
    return (
        <>
            {review.content?.split('\n').map((content, index) => (
                <Typography
                    key={index}
                    variant="body1"
                    sx={{
                        letterSpacing: 1,
                        mt: 1,
                        fontWeight: 600,
                        textAlign: 'justify',
                        color: grey[600]
                    }}>
                    {content}
                </Typography>
            ))
            }
        </>
    );
}

export default ReviewContent;