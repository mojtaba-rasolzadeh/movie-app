import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Box, Typography, Chip } from "@mui/material";

import MoviePagination from "../../components/pages/movie/MoviePagination";
import { getKeywordDetails, getMoviesRelatedToTheKeyword } from "../../services/MovieService";
import MovieItem from "../../components/pages/movie/MovieItem";
import MovieAndTvShowSkeleton from "../../components/pages/constant/skeletons/MovieAndTvShowSkeleton";

const MoviesKeyword = () => {
  const { keywordId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState({});

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { status, data: moviesData } = await getMoviesRelatedToTheKeyword(
        parseInt(keywordId),
        page
      );
      const { data: keywordData } = await getKeywordDetails(
        parseInt(keywordId)
      );
      if (status === 200) {
        setLoading(false);
        setMovies(moviesData);
        setKeyword(keywordData);
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
    <Box sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h5" sx={{
          fontSize: { xs: '1rem', sm: '1.5rem' },
          letterSpacing: 1,
        }}>
          {keyword?.name}
        </Typography>
        {movies.total_results && (
          <Chip
            label={
              <Typography variant="body1">
                {movies.total_results?.toLocaleString()}{" "}
                movies
              </Typography>
            }
            variant="outlined"
          />
        )}
      </Box>
      {loading ? (<MovieAndTvShowSkeleton />) : (
        <>
          <Helmet>
            <title>{`"${keyword.name}"`} Movies | Movie App</title>
          </Helmet>
          <MovieItem movieData={movies} />
        </>
      )}
      <MoviePagination fetchData={fetchData} movieData={movies} />
    </Box>
  );
};

export default MoviesKeyword;
