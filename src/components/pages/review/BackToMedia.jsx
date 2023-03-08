import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { KeyboardBackspace } from '@mui/icons-material'

const BackToMedia = ({ review }) => {
    return (
        <Link
            to={`/${review.media_type === 'movie' ? "movie" : "tv"}/${review.media_id}`}
            style={{ textDecoration: "none" }}
        >
            <Typography
                variant='h4'
                sx={{
                    display: "inline-flex",
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: 3,
                    letterSpacing: 1,
                    fontWeight: 700,
                    color: '#fff',
                    "&:hover": { color: 'text.secondary' },
                }}
            >
                <KeyboardBackspace fontSize="large" />
                {review.media_title}
            </Typography>
        </Link>
    );
}

export default BackToMedia;