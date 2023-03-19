import { Box } from '@mui/material';
import { MovieTitle, RuntimeMovie, GenresMovie, RatingMovie, ReleaseDateMovie } from './';

const MovieDetails = ({
  title,
  release_date,
  genres,
  runtime,
  vote_average,
}) => {

  return (
    <Box sx={{ mt: { xs: 2, sm: 1, md: 0 } }} >
      <ReleaseDateMovie release_date={release_date} />
      <MovieTitle title={title} />
      <GenresMovie genres={genres} />
      <RuntimeMovie runtime={runtime} />
      <RatingMovie vote_average={vote_average} />
    </Box>
  );
};
export default MovieDetails;