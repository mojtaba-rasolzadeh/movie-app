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
                    fontWeight: 700,
                    background: 'linear-gradient(to right,#ED4700,#E76F00)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: 1,
                }}
            >
                <KeyboardBackspace fontSize="large" sx={{color:'#fff'}} />
                {review.media_title}
            </Typography>
        </Link>
    );
}

export default BackToMedia;