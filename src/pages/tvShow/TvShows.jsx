import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";

import Loader from "../../components/constant/Loader";
import { getTvShows, getTrending } from "../../services/MovieService";
import {
  Trending,
  TopRated,
  Popular,
  AiringToday,
  OnTv,
} from "../../components/pages/tvShows";

const TvShows = () => {
  const [loading, setLoading] = useState(false);
  const [trending, setTrending] = useState({});
  const [topRated, setTopRated] = useState({});
  const [popular, setPopular] = useState({});
  const [airingToday, setAiringToday] = useState({});
  const [onTvShows, setOnTvShows] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { status, data: trendingData } = await getTrending("tv", "week");
        const { data: topRatedData } = await getTvShows("top_rated");
        const { data: popularData } = await getTvShows("popular");
        const { data: airingTodayData } = await getTvShows("airing_today");
        const { data: onTvShowsData } = await getTvShows("on_the_air");

        if (status === 200) {
          setLoading(false);
          setTrending(trendingData);
          setTopRated(topRatedData);
          setPopular(popularData);
          setAiringToday(airingTodayData);
          setOnTvShows(onTvShowsData);
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
        <title>Tv Shows | Movie App</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Grid container sx={{ my: 3 }} spacing={4}>
          <Grid xs={12} md={9}>
            <Trending trending={trending} />
            <TopRated topRated={topRated} />
            <AiringToday airingToday={airingToday} />
            <OnTv onTvShows={onTvShows} />
          </Grid>
          <Grid xs={12} md={3}>
            <Popular popular={popular} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default TvShows;
