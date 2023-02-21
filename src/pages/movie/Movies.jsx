import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import { Avatar, Box, Button, Chip, Typography } from '@mui/material';
import { grey, orange, pink, yellow } from '@mui/material/colors';
import { GradeRounded, KeyboardArrowRight } from '@mui/icons-material';
import Slider from 'react-slick';

import { getMovies, getTrending } from '../../services/MovieService';
import TrendingMovies from '../../components/pages/movie/TrandingMovies';
import TopRated from '../../components/pages/movie/TopRated';

const Movies = () => {
    const [loading, setLoading] = useState(false);
    const [trendingMovies, setTrendingMovies] = useState({});
    const [topRatedMovies, setTopRatedMovies] = useState({});

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
                if (status === 200) {
                    setLoading(false);
                    setTrendingMovies(trendingMoviesData);
                    setTopRatedMovies(topRatedMoviesData);
                }
            } catch (err) {
                setLoading(false);
                console.log(err.message);
            }
        }
        fetchData();
    }, [])
    return (
        <Grid container sx={{ my: 3 }} spacing={4}>
            <Grid xs={9}>
                <TrendingMovies trendingMovies={trendingMovies} />
                <TopRated topRatedMovies={topRatedMovies} />
            </Grid>
            <Grid xs={3}>2</Grid>
        </Grid >
    );
}

export default Movies;