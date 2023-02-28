import { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import Loader from '../../components/constant/Loader'
import { getTvShows, getTrending } from '../../services/MovieService';
import { Trending, TopRated,Popular,AiringToday } from '../../components/pages/tvShows';

const TvShows = () => {
    const [loading, setLoading] = useState(false);
    const [trending, setTrending] = useState({});
    const [topRated, setTopRated] = useState({});
    const [popular, setPopular] = useState({});
    const [airingToday, setAiringToday] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { status, data: trendingData } = await getTrending('tv', 'week');
                const { data: topRatedData } = await getTvShows('top_rated');
                const { data: popularData } = await getTvShows('popular');
                const { data: airingTodayData } = await getTvShows('airing_today');

                if (status === 200) {
                    setLoading(false);
                    setTrending(trendingData);
                    setTopRated(topRatedData);
                    setPopular(popularData);
                    setAiringToday(airingTodayData);

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
                            <AiringToday airingToday={airingToday} />
                        </Grid>
                        <Grid xs={12} sm={3}>
                            <Popular popular={popular} />
                        </Grid>
                    </Grid >
            }
        </>
    );
}

export default TvShows;