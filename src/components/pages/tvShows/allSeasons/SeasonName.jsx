import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const SeasonName = ({ tvShow, season }) => {
    return (
        <Link to={`/tv/${tvShow?.id}-${tvShow.name?.split(/[\s:,]/)
            .join("-")
            .split("--")
            .join("-")
            .toLowerCase()
            }/season/${season?.season_number}`}
            style={{ textDecoration: 'none' }}
        >
            <Typography
                variant="h6"
                sx={{
                    letterSpacing: 1,
                    color: "#fff",
                    '&:hover': { color: 'text.secondary' }
                }}>
                {season?.name}
            </Typography>
        </Link>
    );
}

export default SeasonName;