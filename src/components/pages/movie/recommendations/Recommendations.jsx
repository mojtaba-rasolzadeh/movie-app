import { useEffect, useState } from "react";
import _ from "lodash";
import { Box, Typography } from "@mui/material";

import { getRecommendations } from "../../../../services/MovieService";
import MoviePagination from "../MoviePagination";
import RecommendationsMovies from "./RecommendationsMovies";
import RecommendationsSkeleton from "../../constant/skeletons/RecommendationsSkeleton";

const Recommendations = ({ id, title }) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState({});

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getRecommendations("movie", id, page);
      if (status === 200) {
        setLoading(false);
        setMovies(data);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h6" sx={{ letterSpacing: 1, mb: 3 }}>
        Recommendations
      </Typography>
      {_.isEmpty(movies?.results) ? (
        <Typography sx={{ fontSize: ".89rem", color: "text.secondary" }}>
          {`We don't have enough data to suggest any movies based on ${title}.`}
        </Typography>
      ) : (
        <>
          {loading ? (
            <RecommendationsSkeleton />
          ) : (
            <RecommendationsMovies movies={movies} />
          )}
          <MoviePagination movieData={movies} fetchData={fetchData} />
        </>
      )}
    </Box>
  );
};

export default Recommendations;
