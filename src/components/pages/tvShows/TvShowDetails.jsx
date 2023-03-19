import { Box } from '@mui/material';

import { TvShowTitle, ReleaseDateTvShow, GenresTvShow, RuntimeTvShow, RatingTvShow } from './';

const TvShowDetails = ({
    name,
    first_air_date,
    genres,
    episode_run_time,
    vote_average,
}) => {
    console.log(name);
    return (
        <Box sx={{ mt: { xs: 2, sm: 1, md: 0 } }} >
            <ReleaseDateTvShow first_air_date={first_air_date} />
            <TvShowTitle name={name} />
            <GenresTvShow genres={genres} />
            <RuntimeTvShow runtime={episode_run_time} />
            <RatingTvShow vote_average={vote_average} />
        </Box>
    );
};
export default TvShowDetails;