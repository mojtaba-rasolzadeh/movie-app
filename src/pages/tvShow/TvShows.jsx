import { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import Loader from '../../components/constant/Loader'
import { getTvShows, getTrending } from '../../services/MovieService';
import { Trending, TopRated } from '../../components/pages/tvShows';

const TvShows = () => {
    const [loading, setLoading] = useState(false);
    const [trending, setTrending] = useState({});
    const [topRated, setTopRated] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { status, data: trendingData } = await getTrending('tv', 'week');
                const { data: topRatedData } = await getTvShows('top_rated');

                if (status === 200) {
                    setLoading(false);
                    setTrending(trendingData);
                    setTopRated(topRatedData);

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
                            <Trending trending={trending} />
                            <TopRated topRated={topRated} />
                        </Grid>
                        <Grid xs={12} sm={3}>
                        </Grid>
                    </Grid >
            }
        </>
    );
}

export default TvShows;