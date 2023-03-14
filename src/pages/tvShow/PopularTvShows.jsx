import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from "@mui/material";

import { getTvShows } from "../../services/MovieService";
import { Loader } from "../../components";
import TvShowItem from "../../components/pages/tvShows/TvShowItem";
import TvShowPagination from "../../components/pages/tvShows/TvShowPagination";

const PopularTvShows = () => {
  const [loading, setLoading] = useState(false);
  const [tvShows, setTvShows] = useState([]);

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getTvShows("popular", page);
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
        <title> Popular Tv Shows | Movie App </title>
      </Helmet>
      <Box sx={{ py: 4 }} >
        <Typography variant='h5' mb={4} sx={{
          fontWeight: 700,
          backgroundImage: 'linear-gradient(to right,#f3001d,#ff004d)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: 1
        }}>Popular Tv Shows</Typography>
        {loading ? <Loader /> : <TvShowItem tvShowData={tvShows} />}
        <TvShowPagination tvShowData={tvShows} fetchData={fetchData} />
      </Box>
    </>
  );
};
export default PopularTvShows;
