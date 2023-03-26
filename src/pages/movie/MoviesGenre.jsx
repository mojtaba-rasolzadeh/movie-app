import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Box, Typography, Chip } from "@mui/material";

import { getDiscoverMovieWithGenres, getGenresMovieList } from "../../services/MovieService";
import MoviePagination from "../../components/pages/movie/MoviePagination";
import MovieItem from "../../components/pages/movie/MovieItem";
import MovieAndTvShowSkeleton from "../../components/pages/constant/skeletons/MovieAndTvShowSkeleton";

const MoviesGenre = () => {
  const { genreId } = useParams();
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState([]);
  const [movies, setMovies] = useState([]);

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getDiscoverMovieWithGenres(parseInt(genreId), page);
      const { data: genresData } = await getGenresMovieList();
      if (status === 200) {
        setLoading(false);
        setMovies(data);
        setGenre(genresData.genres.find((genre) => genre.id === parseInt(genreId)));
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
      <Box sx={{
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: "space-between",
        alignItems: "center",
        mb: 3
      }}>
        <Typography variant="h5" sx={{
          fontSize: { xs: '1rem', sm: '1.5rem' },
          letterSpacing: 1
        }}>
          {genre.name}
        </Typography>
        {movies.total_results && (
          <Chip
            label={
              <Typography variant="body1">
                {movies?.total_results.toLocaleString()}{" "}movies
              </Typography>
            }
            variant='outlined'
          />
        )}
      </Box>
      {loading ? (<MovieAndTvShowSkeleton />) : (
        <>
          <Helmet>
            <title>{`${genre.name}`} Movies | Movie App</title>
          </Helmet>
          <MovieItem movieData={movies} />
        </>
      )}
      <MoviePagination fetchData={fetchData} movieData={movies} />
    </Box>
  );
};
export default MoviesGenre;