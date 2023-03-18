import { MovieTitle, RuntimeMovie, GenresMovie, RatingMovie, ReleaseDateMovie } from './';

const MovieDetails = ({
  title,
  release_date,
  genres,
  runtime,
  vote_average,
}) => {

  return (
    <>
      <ReleaseDateMovie release_date={release_date} />
      <MovieTitle title={title} />
      <GenresMovie genres={genres} />
      <RuntimeMovie runtime={runtime} />
      <RatingMovie vote_average={vote_average} />
    </>
  );
};
export default MovieDetails;