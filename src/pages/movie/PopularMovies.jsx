import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Discover from "../../components/discover/Discover";
import { getMovies } from "../../services/MovieService";
import { Loader } from "../../components";
import Movie from "../../components/pages/movie/Movie";
import MoviePagination from "../../components/pages/movie/MoviePagination";

const PopularMovies = () => {
  const [loading, setLoading] = useState(false);
  const [popularMovie, setPopularMovie] = useState({});

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getMovies("popular", page);
      if (status === 200) {
        setLoading(false);
        setPopularMovie(data);
      }
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ py: 3.75 }}>
      <Typography variant="h5">Popular Movies</Typography>
      <Grid container sx={{ mt: 3 }} spacing={2}>
        <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
          <Discover />
        </Grid>
        <Grid xs={12} sm={6} md={8} lg={9} xl={10}>
          {loading ? (
            <Loader />
          ) : (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <Movie movieData={popularMovie} />
            </Box>
          )}
          <MoviePagination movieData={popularMovie} fetchData={fetchData} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default PopularMovies;
