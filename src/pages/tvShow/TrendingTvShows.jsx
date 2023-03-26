import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';

import { getTrending } from '../../services/MovieService';
import TvShowItem from '../../components/pages/tvShows/TvShowItem';
import TvShowPagination from '../../components/pages/tvShows/TvShowPagination';
import MovieAndTvShowSkeleton from '../../components/pages/constant/skeletons/MovieAndTvShowSkeleton';

const TrendingTvShows = () => {
    const [loading, setLoading] = useState(false);
    const [todayTvShows, setTodayTvShows] = useState({});

    const fetchData = async (page) => {
        try {
            setLoading(true);
            const { status, data } = await getTrending('tv', 'day', page);
            if (status === 200) {
                setLoading(false);
                setTodayTvShows(data);
            }
        } catch (err) {
            setLoading(false);
            console.log(err.message);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Helmet>
                <title> Trending Tv Shows | Movie App </title>
            </Helmet>
            <Box sx={{ py: 4 }} >
                <Typography variant='h5' mb={4} sx={{
                    letterSpacing: 1
                }}>Trending Tv Shows</Typography>
                {loading ? <MovieAndTvShowSkeleton /> : <TvShowItem tvShowData={todayTvShows} />}
                <TvShowPagination tvShowData={todayTvShows} fetchData={fetchData} />
            </Box>
        </>
    );
}

export default TrendingTvShows;