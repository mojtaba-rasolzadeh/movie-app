import { Box } from "@mui/material";

import {
  MediaReleaseDate,
  MediaTitle,
  RatingMedia,
  MediaRuntime,
  GenresMedia,
} from "../constant/movie&tvShow";

const TvShowDetails = ({
  name,
  first_air_date,
  genres,
  episode_run_time,
  vote_average,
}) => {
  return (
    <Box sx={{ mt: { xs: 3, sm: 1, md: 0 } }}>
      <MediaReleaseDate releaseDate={first_air_date} />
      <MediaTitle title={name} />
      <GenresMedia genres={genres} mediaType="tv" />
      <MediaRuntime
        runtime={
          episode_run_time?.length > 1 ? episode_run_time[0] : episode_run_time
        }
      />
      <RatingMedia vote_average={vote_average} />
    </Box>
  );
};
export default TvShowDetails;
