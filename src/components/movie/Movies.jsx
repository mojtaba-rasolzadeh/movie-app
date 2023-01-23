import { useContext } from "react";
import _ from "lodash";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { MovieContext } from "../../context/MovieContext";
import { Loader } from "../constant";
import { PopularMovies, AllMovies } from "./";

const Movies = () => {
  const { activeLink, popularMovies, isLoading } = useContext(MovieContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {isLoading || _.isEmpty(popularMovies.results) ? (
        <Loader />
      ) : (
        <Grid
          container
          rowSpacing={{ xs: 2, sm: 4, md: 2 }}
          columnSpacing={{ xs: 0, sm: 2 }}
          sx={{ my: 4 }}
        >
          {popularMovies.results.map((movie) => (
            <PopularMovies key={movie.id} {...movie} />
          ))}
        </Grid>
      )}
    </Box>
  );
};
export default Movies;
