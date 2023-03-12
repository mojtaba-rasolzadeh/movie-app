import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Box, Typography, Divider, Chip } from "@mui/material";

import MoviePagination from "../../components/pages/movie/MoviePagination";
import { Loader } from "../../components";

import { getKeywordDetails, getMoviesRelatedToTheKeyword } from "../../services/MovieService";
import MovieItem from "../../components/pages/movie/MovieItem";

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
        <Link
          href={`/keyword/${keyword.id}-${keyword.name}/movie`}
          style={{ textDecoration: "none" }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: 700,
              letterSpacing: 1,
              background: 'linear-gradient(to right,#ED4700,#E76F00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {keyword?.name}
          </Typography>
        </Link>
        {movies.total_results && (
          <Chip
            label={
              <Typography variant="body1">
                {movies.total_results?.toLocaleString()}{" "}
                movies
              </Typography>
            }
            sx={{ background: 'linear-gradient(to right,#ED4700,#E76F00)' }}
          />
        )}
      </Box>
      <Divider />
      {loading ? (<Loader />) : (
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
