import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';

import { getMovies } from '../../services/MovieService';
import MovieItem from '../../components/pages/movie/MovieItem';
import MoviePagination from '../../components/pages/movie/MoviePagination';
import MovieAndTvShowSkeleton from '../../components/pages/constant/skeletons/MovieAndTvShowSkeleton';

const UpcomingMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState({});

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getMovies('upcoming', page);
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
        <title> Upcoming Movies | Movie App </title>
      </Helmet>
      <Box sx={{ py: 4 }} >
        <Typography variant='h5' mb={4} sx={{
          letterSpacing: 1
        }}>Upcoming Movies</Typography>
        {loading ? <MovieAndTvShowSkeleton /> : <MovieItem movieData={movies} />}
        <MoviePagination movieData={movies} fetchData={fetchData} />
      </Box>
    </>
  );
}

export default UpcomingMovies;