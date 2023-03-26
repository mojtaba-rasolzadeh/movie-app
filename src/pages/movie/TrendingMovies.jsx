import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';

import { getTrending } from '../../services/MovieService';
import MovieItem from '../../components/pages/movie/MovieItem';
import MoviePagination from '../../components/pages/movie/MoviePagination';
import MovieAndTvShowSkeleton from '../../components/pages/constant/skeletons/MovieAndTvShowSkeleton';

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
                <Typography variant='h5' mb={4} sx={{ letterSpacing: 1 }}>
                    Trending Movies
                </Typography>
                {loading ? <MovieAndTvShowSkeleton/> : <MovieItem movieData={todayMovies} />}
                <MoviePagination movieData={todayMovies} fetchData={fetchData} />
            </Box>
        </>
    );
}

export default TrendingMovies;