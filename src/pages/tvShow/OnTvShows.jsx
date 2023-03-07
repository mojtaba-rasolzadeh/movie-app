import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Box, Typography } from "@mui/material";

import { getTvShows } from "../../services/MovieService";
import { Loader } from "../../components";
import TvShowItem from "../../components/pages/tvShows/TvShowItem";
import TvShowPagination from "../../components/pages/tvShows/TvShowPagination";

const OnTvShows = () => {
  const [loading, setLoading] = useState(false);
  const [tvShows, setTvShows] = useState([]);

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getTvShows("on_the_air", page);
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
        <title> Currently Airing TV Shows | Movie App </title>
      </Helmet>
      <Box sx={{ py: 4 }} >
        <Typography variant='h5'>Currently Airing TV Shows</Typography>
        {
          loading ? <Loader /> :
            <TvShowItem tvShowData={tvShows} />
        }
        <TvShowPagination tvShowData={tvShows} fetchData={fetchData} />
      </Box>
    </>

  );
};
export default OnTvShows;