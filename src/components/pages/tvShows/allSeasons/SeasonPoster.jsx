import { Link } from 'react-router-dom';
import { Avatar, CardActionArea } from '@mui/material';

const SeasonPoster = ({ tvShow, season }) => {
    return (
        <CardActionArea sx={{ width: 100, borderRadius: '20px' }}>
            <Link to={`/tv/${tvShow?.id}-${tvShow.name?.split(/[\s:,]/)
                .join("-")
                .split("--")
                .join("-")
                .toLowerCase()
                }/season/${season?.season_number}`}
                style={{ textDecoration: 'none' }}
            >
                <Avatar
                    variant='rounded'
                    sx={{
                        width: 100,
                        height: 150,
                        borderRadius: '20px'
                    }} src={`https://www.themoviedb.org/t/p/w130_and_h195_bestv2${season?.poster_path}`}
                    alt={season?.name} />
            </Link>
        </CardActionArea>
    );
}

export default SeasonPoster;