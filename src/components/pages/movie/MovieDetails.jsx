import { Box } from "@mui/material";

import {
  MediaTitle,
  GenresMedia,
  RatingMedia,
  MediaRuntime,
  MediaReleaseDate,
} from "../constant/movie&tvShow";

const MovieDetails = ({
  title,
  release_date,
  genres,
  runtime,
  vote_average,
}) => {
  return (
    <Box sx={{ mt: { xs: 2, sm: 1, md: 0 } }}>
      <MediaReleaseDate releaseDate={release_date} />
      <MediaTitle title={title} />
      <GenresMedia mediaType="movie" genres={genres} />
      <MediaRuntime runtime={runtime} />
      <RatingMedia vote_average={vote_average} />
    </Box>
  );
};
export default MovieDetails;
