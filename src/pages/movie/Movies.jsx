import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";

import Loader from "../../components/constant/Loader";
import { getMovies, getTrending } from "../../services/MovieService";
import {
  TrendingMovies,
  TopRated,
  PopularMovies,
  NowPlayingMovies,
  UpcomingMovies,
} from "../../components/pages/movie";

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState({});
  const [topRatedMovies, setTopRatedMovies] = useState({});
  const [popularMovies, setPopularMovies] = useState({});
  const [nowPlayingMovies, setNowPlayingMovies] = useState({});
  const [upcomingMovies, setUpcomingMovies] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { status, data: trendingMoviesData } = await getTrending(
          "movie",
          "week"
        );
        const { data: topRatedMoviesData } = await getMovies("top_rated");
        const { data: popularMoviesData } = await getMovies("popular");
        const { data: nowPlayingMoviesData } = await getMovies("now_playing");
        const { data: upcomingMoviesData } = await getMovies("upcoming");
        if (status === 200) {
          setLoading(false);
          setTrendingMovies(trendingMoviesData);
          setTopRatedMovies(topRatedMoviesData);
          setPopularMovies(popularMoviesData);
          setNowPlayingMovies(nowPlayingMoviesData);
          setUpcomingMovies(upcomingMoviesData);
        }
      } catch (err) {
        setLoading(false);
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Movies | Movie App</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Grid container sx={{ my: 3 }} spacing={4}>
          <Grid xs={12} md={9}>
            <TrendingMovies trendingMovies={trendingMovies} />
            <TopRated topRatedMovies={topRatedMovies} />
            <NowPlayingMovies nowPlayingMovies={nowPlayingMovies} />
            <UpcomingMovies upcomingMovies={upcomingMovies} />
          </Grid>
          <Grid xs={12} md={3}>
            <PopularMovies popularMovies={popularMovies} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Movies;
