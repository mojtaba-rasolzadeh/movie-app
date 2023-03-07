import { useEffect, useState } from "react";
import _ from "lodash";
import { Box, Typography } from "@mui/material";

import { getRecommendations } from "../../../../services/MovieService";
import { Loader } from "../../../constant";
import TvShowPagination from "../TvShowPagination";
import RecommendationsTvShows from "./RecommendationsTvShows";

const Recommendations = ({ id, name }) => {
  const [loading, setLoading] = useState(false);
  const [tvShows, setTvShow] = useState({});

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getRecommendations('tv', id, page);
      if (status === 200) {
        setLoading(false);
        setTvShow(data);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ letterSpacing: 1 }}>
        Recommendations
      </Typography>
      {_.isEmpty(tvShows?.results) ? (
        <Typography sx={{ fontSize: ".89rem", color: "text.secondary" }}>
          {`We don't have enough data to suggest any tvShows based on ${name}. You can help by rating movies you've seen.`}
        </Typography>
      ) : (
        <>
          {
            loading ? <Loader /> :
              <RecommendationsTvShows tvShows={tvShows} />
          }
          <TvShowPagination tvShowData={tvShows} fetchData={fetchData} />
        </>
      )}
    </Box>
  );
};

export default Recommendations;
