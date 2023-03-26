import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from "@mui/material";

import { getTvShows } from "../../services/MovieService";
import TvShowItem from "../../components/pages/tvShows/TvShowItem";
import TvShowPagination from "../../components/pages/tvShows/TvShowPagination";
import MovieAndTvShowSkeleton from '../../components/pages/constant/skeletons/MovieAndTvShowSkeleton';

const AiringTodayTvShows = () => {
  const [loading, setLoading] = useState(false);
  const [tvShows, setTvShows] = useState([]);

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getTvShows("airing_today", page);
      if (status === 200) {
        setLoading(false);
        setTvShows(data);
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
    <>
      <Helmet>
        <title> Airing Today Tv Shows | Movie App </title>
      </Helmet>
      <Box sx={{ py: 4 }} >
        <Typography variant='h5' mb={4} sx={{
          letterSpacing: 1
        }}>Airing Today Tv Shows</Typography>
        {loading ? <MovieAndTvShowSkeleton /> : <TvShowItem tvShowData={tvShows} />}
        <TvShowPagination tvShowData={tvShows} fetchData={fetchData} />
      </Box>
    </>
  );
};
export default AiringTodayTvShows;