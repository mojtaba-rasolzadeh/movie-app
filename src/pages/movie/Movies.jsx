import { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import Loader from '../../components/constant/Loader'
import { getMovies, getTrending } from '../../services/MovieService';
import { TrendingMovies, TopRated, PopularMovies, NowPlayingMovies, UpcomingMovies } from '../../components/pages/movie';

const Movies = () => {
    const [loading, setLoading] = useState(false);
    const [trendingMovies, setTrendingMovies] = useState({});
    const [topRatedMovies, setTopRatedMovies] = useState({});
    const [popularMovies, setPopularMovies] = useState({});
    const [nowPlayingMovies, setNowPlayingMovies] = useState({});
    const [upcomingMovies, setUpcomingMovies] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { status, data: trendingMoviesData } = await getTrending('movie', 'week');
                const { data: topRatedMoviesData } = await getMovies('top_rated');
                const { data: popularMoviesData } = await getMovies('popular');
                const { data: nowPlayingMoviesData } = await getMovies('now_playing');
                const { data: upcomingMoviesData } = await getMovies('upcoming');
                if (status === 200) {
                    setLoading(false);
                    setTrendingMovies(trendingMoviesData);
                    setTopRatedMovies(topRatedMoviesData);
                    setPopularMovies(popularMoviesData);
                    setNowPlayingMovies(nowPlayingMoviesData);
                    setUpcomingMovies(upcomingMoviesData);
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
                            <TrendingMovies trendingMovies={trendingMovies} />
                            <TopRated topRatedMovies={topRatedMovies} />
                            <NowPlayingMovies nowPlayingMovies={nowPlayingMovies} />
                            <UpcomingMovies upcomingMovies={upcomingMovies} />
                        </Grid>
                        <Grid xs={12} sm={3}>
                            <PopularMovies popularMovies={popularMovies} />
                        </Grid>
                    </Grid >
            }
        </>
    );
}

export default Movies;

// const [topRatedTvShows, setTopRatedTvShows] = useState({});
// const [popularTvShows, setPopularTvShows] = useState({});
// const [airingTodayTvShows, setAiringTodayTvShows] = useState({});
// const [upcomingTvShows, setOnTvShows] = useState({});

//--------------

// const { data: topRatedTvShowsData } = await getTvShows('top_rated');
// const { data: popularTvShowsData } = await getTvShows('popular');
// const { data: airingTodayTvShowsData } = await getTvShows('airing_today');
// const { data: onTvShowsData } = await getTvShows('on_the_air');

//----------

// setTopRatedTvShows(topRatedTvShowsData);
// setPopularTvShows(popularTvShowsData);
// setAiringTodayTvShows(airingTodayTvShowsData);
// setOnTvShows(onTvShowsData);

//------------

{/* <TopRated topRatedMovies={topRatedMovies} />
<NowPlayingMovies nowPlayingMovies={nowPlayingMovies} />
<UpcomingMovies upcomingMovies={upcomingMovies} /> */}

//-------

{/* <PopularMovies popularMovies={popularMovies} /> */}
