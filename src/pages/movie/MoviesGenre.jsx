import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Divider, Chip } from "@mui/material";

import { getDiscoverMovieWithGenres, getGenresMovieList } from "../../services/MovieService";
import MoviePagination from "../../components/pages/movie/MoviePagination";
import { Loader } from "../../components";
import MovieItem from "../../components/pages/movie/MovieItem";

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
      <Box sx={{ display: "flex", flexWrap: 'wrap', justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography sx={{ fontSize: "2rem", fontWeight: 700, letterSpacing: 2,
        background: 'linear-gradient(to right,#ED4700,#E76F00)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        // letterSpacing: 1,
      
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
            sx={{ background: 'linear-gradient(to right,#ED4700,#E76F00)' }}
          />
        )}
      </Box>
      <Divider />
      {loading ? (<Loader />) : (<MovieItem movieData={movies} />)}
      <MoviePagination fetchData={fetchData} movieData={movies} />
    </Box>
  );
};
export default MoviesGenre;