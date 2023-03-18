import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const ViewAllMedia = ({ movieId, movieTitle, link, text }) => {
    return (
        <Link to={`/movie/${movieId}-${movieTitle?.split(/[\W]/)
            .join("-")
            .split("--")
            .join("-")
            .toLowerCase()}/${link}`}
            style={{ textDecoration: 'none' }}>
            <Typography sx={{
                textTransform: 'capitalize',
                letterSpacing: 1,
                background: 'linear-gradient(to right,#f3001d,#ff004d)',
                '&:hover': { background: 'linear-gradient(to right,#ff1632,#ff2164)' },
                color: '#fff',
                padding: '.75rem 2.5rem',
                borderRadius: '100px'
            }}>
                {text}
            </Typography>
        </Link>
    );
}

export default ViewAllMedia;