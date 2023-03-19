import { Avatar } from "@mui/material";

const MoviePoster = ({ title, poster_path }) => {
    return (
        <Avatar
            variant="rounded"
            sx={{ display: 'block', width: { xs: 300, md: 1 }, height: 450, borderRadius: '20px' }}
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}
            alt={title}
        />
    );
}

export default MoviePoster;