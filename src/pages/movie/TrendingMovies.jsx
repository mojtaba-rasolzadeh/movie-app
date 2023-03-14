import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';

import { Loader } from '../../components';
import { getTrending } from '../../services/MovieService';
import MoviePagination from '../../components/pages/movie/MoviePagination';
import MovieItem from '../../components/pages/movie/MovieItem';

const TrendingMovies = () => {
    const [loading, setLoading] = useState(false);
    const [todayMovies, setTodayMovies] = useState({});

    const fetchData = async (page) => {
        try {
            setLoading(true);
            const { status, data } = await getTrending('movie', 'day', page);
            if (status === 200) {
                setLoading(false);
                setTodayMovies(data);
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
                <title> Trending Movies | Movie App </title>
            </Helmet>
            <Box sx={{ py: 4 }} >
                <Typography variant='h5' mb={4} sx={{
                    fontWeight: 700,
                    background: 'linear-gradient(to right,#f3001d,#ff004d)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: 1,
                }}>Trending Movies</Typography>
                {loading ? <Loader /> : <MovieItem movieData={todayMovies} />}
                <MoviePagination movieData={todayMovies} fetchData={fetchData} />
            </Box>
        </>
    );
}

export default TrendingMovies;