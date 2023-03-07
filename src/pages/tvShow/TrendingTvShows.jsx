import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';

import { Loader } from '../../components';
import { getTrending } from '../../services/MovieService';
import TvShowPagination from '../../components/pages/tvShows/TvShowPagination';
import TvShowItem from '../../components/pages/tvShows/TvShowItem';

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
                <title> Trending TvShows | Movie App </title>
            </Helmet>
            <Box sx={{ py: 4 }} >
                <Typography variant='h5'>Trending TvShows</Typography>
                {
                    loading ? <Loader /> :
                        <TvShowItem tvShowData={todayTvShows} />
                }
                <TvShowPagination tvShowData={todayTvShows} fetchData={fetchData} />
            </Box>
        </>
    );
}

export default TrendingTvShows;