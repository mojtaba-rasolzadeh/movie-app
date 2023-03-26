import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Box, Typography } from "@mui/material";

import { getTvShows } from "../../services/MovieService";
import TvShowItem from "../../components/pages/tvShows/TvShowItem";
import TvshowPagination from "../../components/pages/tvShows/TvShowPagination";
import MovieAndTvShowSkeleton from '../../components/pages/constant/skeletons/MovieAndTvShowSkeleton';

const TopRatedTvShows = () => {
  const [loading, setLoading] = useState(false);
  const [tvShows, setTvShows] = useState([]);

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getTvShows("top_rated", page);
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
        <title> Top Rated TvShows | Movie App </title>
      </Helmet>
      <Box sx={{ py: 4 }} >
        <Typography variant='h5' mb={4} sx={{
          letterSpacing: 1
        }}>Top Rated TvShows</Typography>
        {loading ? <MovieAndTvShowSkeleton /> : <TvShowItem tvShowData={tvShows} />}
        <TvshowPagination tvShowData={tvShows} fetchData={fetchData} />
      </Box>
    </>

  );
};
export default TopRatedTvShows;