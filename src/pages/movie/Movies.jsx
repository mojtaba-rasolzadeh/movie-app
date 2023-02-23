import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import { Avatar, Box, Button, CardActionArea, Chip, Rating, Typography } from '@mui/material';
import { grey, orange, pink, yellow } from '@mui/material/colors';
import { AutoGraph, GradeRounded, Insights, KeyboardArrowRight, Moving, StackedLineChart } from '@mui/icons-material';
import Slider from 'react-slick';

import { getMovies, getTrending } from '../../services/MovieService';
import TrendingMovies from '../../components/pages/movie/TrandingMovies';
import TopRated from '../../components/pages/movie/TopRated';
import PopularMovies from '../../components/pages/movie/PopularMovies';
import NowPlayingMovies from '../../components/pages/movie/NowPlayingMovies';

const Movies = () => {
    const [loading, setLoading] = useState(false);
    const [trendingMovies, setTrendingMovies] = useState({});
    const [topRatedMovies, setTopRatedMovies] = useState({});
    const [popularMovies, setPopularMovies] = useState({});
    const [nowPlayingMovies, setNowPlayingMovies] = useState({});

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 2500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    // dots: false
                    dots: true
                }
            },
            {
                breakpoint: 1262,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { status, data: trendingMoviesData } = await getTrending('movie', 'week');
                const { data: topRatedMoviesData } = await getMovies('top_rated');
                const { data: popularMoviesData } = await getMovies('popular');
                const { data: nowPlayingMoviesData } = await getMovies('now_playing');
                if (status === 200) {
                    setLoading(false);
                    setTrendingMovies(trendingMoviesData);
                    setTopRatedMovies(topRatedMoviesData);
                    setPopularMovies(popularMoviesData);
                    setNowPlayingMovies(nowPlayingMoviesData);
                }
            } catch (err) {
                setLoading(false);
                console.log(err.message);
            }
        }
        fetchData();
    }, [])
    console.log(popularMovies);
    return (
        <Grid container sx={{ my: 3 }} spacing={4}>
            <Grid xs={12} sm={9}>
                <TrendingMovies trendingMovies={trendingMovies} />
                <TopRated topRatedMovies={topRatedMovies} />
                <NowPlayingMovies nowPlayingMovies={nowPlayingMovies} />
            </Grid>
            <Grid xs={12} sm={3}>
                <PopularMovies popularMovies={popularMovies} />
            </Grid>
        </Grid >
    );
}

export default Movies;