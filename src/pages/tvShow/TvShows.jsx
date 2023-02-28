import { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import Loader from '../../components/constant/Loader'
import { getTvShows, getTrending } from '../../services/MovieService';
import { TrendingMovies, TopRated, PopularMovies, NowPlayingMovies, UpcomingMovies } from '../../components/pages/movie';
import TrendingTvShows from '../../components/pages/tvShows/TrendingTvShows';

const TvShows = () => {
    const [loading, setLoading] = useState(false);
    const [trendingTvShows, setTrendingTvShows] = useState({});

    console.log(trendingTvShows);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { status, data: trendingTvShowsData } = await getTrending('tv', 'week');

                if (status === 200) {
                    setLoading(false);
                    setTrendingTvShows(trendingTvShowsData);

                }
            } catch (err) {
                setLoading(false);
                console.log(err.message);
            }
        }
        fetchData();
    }, [])

    return (
        <>
            {
                loading ? <Loader /> :
                    <Grid container sx={{ my: 3 }} spacing={4}>
                        <Grid xs={12} sm={9}>
                            <TrendingTvShows trendingTvShows={trendingTvShows} />
                        </Grid>
                        <Grid xs={12} sm={3}>
                        </Grid>
                    </Grid >
            }
        </>
    );
}

export default TvShows;