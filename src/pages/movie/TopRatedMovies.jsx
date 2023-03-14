import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';

import { Loader } from '../../components';
import { getMovies } from '../../services/MovieService';
import MoviePagination from '../../components/pages/movie/MoviePagination';
import MovieItem from '../../components/pages/movie/MovieItem';

const TrendingMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState({});

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getMovies('top_rated', page);
      if (status === 200) {
        setLoading(false);
        setMovies(data);
      }
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <>
      <Helmet>
        <title> Top Rated Movies | Movie App </title>
      </Helmet>
      <Box sx={{ py: 4 }} >
        <Typography variant='h5' mb={4} sx={{
          fontWeight: 700,
          backgroundImage: 'linear-gradient(to right,#f3001d,#ff004d)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: 1
        }}>Top Rated Movies</Typography>
        {loading ? <Loader /> : <MovieItem movieData={movies} />}
        <MoviePagination movieData={movies} fetchData={fetchData} />
      </Box>
    </>
  );
}

export default TrendingMovies;