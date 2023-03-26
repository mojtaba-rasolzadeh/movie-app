import { useEffect, useState } from "react";
import _ from "lodash";
import { Box, Typography } from "@mui/material";

import { getRecommendations } from "../../../../services/MovieService";
import TvShowPagination from "../TvShowPagination";
import RecommendationsTvShows from "./RecommendationsTvShows";
import RecommendationsSkeleton from "../../constant/skeletons/RecommendationsSkeleton";

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
      <Typography variant="h6" sx={{ letterSpacing: 1, mb: 3 }}>
        Recommendations
      </Typography>
      {_.isEmpty(tvShows?.results) ? (
        <Typography sx={{ fontSize: ".89rem", color: "text.secondary" }}>
          {`We don't have enough data to suggest any tvShows based on ${name}.`}
        </Typography>
      ) : (
        <>
          {loading ? <RecommendationsSkeleton /> : <RecommendationsTvShows tvShows={tvShows} />}
          <TvShowPagination tvShowData={tvShows} fetchData={fetchData} />
        </>
      )}
    </Box>
  );
};

export default Recommendations;
