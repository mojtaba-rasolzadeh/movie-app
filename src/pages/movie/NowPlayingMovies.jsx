import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Avatar, Box, Chip, Typography } from '@mui/material';
import { GradeRounded } from '@mui/icons-material';
import { grey, yellow } from '@mui/material/colors';

import { Loader } from '../../components';
import { getMovies } from '../../services/MovieService';
import MoviePagination from '../../components/pages/movie/MoviePagination';

const NowPlayingMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState({});

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getMovies('now_playing', page);
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
        <title> Now Playing Movies | Movie App </title>
      </Helmet>
      <Typography variant='h5' mt={2}>Now Playing Movies</Typography>
      {
        loading ? <Loader /> :
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, my: 5 }}>
            {
              movies.results?.map((movie) => (
                <Box key={movie.id} sx={{ position: 'relative', width: 220, borderRadius: '20px' }}>
                  <Avatar variant="rounded" sx={{ width: 1, height: 330, borderRadius: '20px' }} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} />
                  <Box sx={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, width: 1, backgroundImage: 'linear-gradient(to top, rgb(32 32 32 / 94%) 90px, rgb(12 11 2 / 0%) 100%)', borderRadius: '17px' }} />
                  <Box sx={{ width: 1, position: 'absolute', bottom: 10, p: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <Box sx={{ maxWidth: 200 }}>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Chip size='small' sx={{ backgroundColor: grey[900] }} icon={<GradeRounded fontSize='small' sx={{ color: `${yellow['A700']} !important` }} />} label={
                          <Typography variant='caption'>{movie.vote_average.toFixed(1)}</Typography>
                        } />
                        <Chip size='small' sx={{ backgroundColor: grey[900] }} label={
                          <Typography variant='caption'>{movie.release_date.slice(0, 4)}</Typography>
                        } />
                      </Box>
                      <Link to={`/movie/${movie.id}`} style={{ textAlign: 'center !important', textDecoration: 'none' }}>
                        <Typography variant="body2" sx={{ textAlign: 'center', letterSpacing: 1, color: '#fff', '&:hover': { color: 'text.secondary' } }}>{movie.title}</Typography>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              ))
            }
          </Box>
      }
      <MoviePagination movieData={movies} fetchData={fetchData} />
    </>
  );
}

export default NowPlayingMovies;