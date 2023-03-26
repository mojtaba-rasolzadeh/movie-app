import { Typography } from '@mui/material';

const ReviewContent = ({ content }) => {
    return (
        <Typography
            component="span"
            variant="body2"
            sx={{
                textAlign: 'justify',
                display: '-webkit-box',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                WebkitLineClamp: 4,
                WebkitBoxOrient: 'vertical'
            }}>
            {content}
        </Typography>
    );
}

export default ReviewContent;