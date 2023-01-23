import _ from "lodash";
import { Typography } from "@mui/material";

import MovieGenre from "./MovieGenre";
import TvGenres from "./TvGenres";

const GenreMedia = ({ genreType, movies, tv }) => {
  return (
    <>
      {genreType === "Movies" ? (
        movies.results.map((movie) => <MovieGenre key={movie.id} {...movie} />)
      ) : _.isEmpty(tv.results) ? (
        <Typography sx={{my:3}}>No TV shows found.</Typography>
      ) : (
        tv.results.map((tv) => <TvGenres key={tv.id} {...tv} />)
      )}
    </>
  );
};

export default GenreMedia;
