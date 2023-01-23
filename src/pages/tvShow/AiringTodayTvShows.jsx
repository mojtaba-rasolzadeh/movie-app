import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { getTvShows } from "../../services/MovieService";
import Discover from "../../components/discover/Discover";
import TvShows from "../../components/pages/tvShows/TvShows";
import TvshowsPagination from "../../components/pages/tvShows/TvShowsPagination";
import { Loader } from "../../components";

const AiringTodayTvShows = () => {
  const [loading, setLoading] = useState(false);
  const [tvShows, setTvShows] = useState([]);

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getTvShows("airing_today",page);
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
    <Box sx={{ py: 3.75 }}>
      <Typography variant="h5">TV Shows Airing Today</Typography>
      <Grid container sx={{ mt: 3 }} spacing={2}>
        <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
          <Discover />
        </Grid>
        <Grid xs={12} sm={6} md={8} lg={9} xl={10}>
          {loading ? (
            <Loader />
          ) : (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <TvShows tvShowsData={tvShows} />
            </Box>
          )}
          <TvshowsPagination tvShowsData={tvShows} fetchData={fetchData} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default AiringTodayTvShows;
