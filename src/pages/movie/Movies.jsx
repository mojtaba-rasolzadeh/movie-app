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

const Movies = () => {
    const [loading, setLoading] = useState(false);
    const [trendingMovies, setTrendingMovies] = useState({});
    const [topRatedMovies, setTopRatedMovies] = useState({});
    const [popularMovies, setPopularMovies] = useState({});

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
                if (status === 200) {
                    setLoading(false);
                    setTrendingMovies(trendingMoviesData);
                    setTopRatedMovies(topRatedMoviesData);
                    setPopularMovies(popularMoviesData);
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
            <Grid xs={9}>
                <TrendingMovies trendingMovies={trendingMovies} />
                <TopRated topRatedMovies={topRatedMovies} />
            </Grid>
            <Grid xs={3}>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <AutoGraph sx={{ color: yellow['A700'] }} /> <Typography variant="h6" sx={{ letterSpacing: 1 }}>Popular Movies</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, my: 4 }}>
                        {
                            popularMovies.results?.slice(0, 5).map((movie) => (
                                <Box key={movie.id} sx={{ display: 'flex', gap: 2 }}>
                                    <CardActionArea sx={{ width: 65, borderRadius: 1 }}>
                                        <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
                                            <Avatar variant='rounded' sx={{ width: 65, height: 100, }} src={`https://www.themoviedb.org/t/p/w200${movie.poster_path}`} />
                                        </Link>
                                    </CardActionArea>
                                    <Box>
                                        <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
                                            <Typography variant="body2" sx={{ letterSpacing: 1, color: '#fff', '&:hover': { color: 'text.secondary' }, display: '-webkit-box', textOverflow: 'ellipsis', overflow: 'hidden', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }} >{movie.title}</Typography>
                                        </Link>
                                        <Typography component="p" variant="caption" color="text.secondary" sx={{ letterSpacing: 1 }} gutterBottom>
                                            {new Date(movie.release_date).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' })}
                                        </Typography>
                                        <Typography component="p" variant="caption" color="text.secondary" sx={{ letterSpacing: 1, mt: 1 }}>
                                            {movie.vote_average.toFixed(1)}
                                        </Typography>
                                        <Rating sx={{flexWrap:'wrap'}} name="half-rating-read" value={movie.vote_average} precision={0.5} max={10} readOnly size="small" />
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                    <Link to="/movie/popular" style={{ textDecoration: 'none' }}>
                        <Typography sx={{ width:{sm:1,lg:'75%'},textAlign: 'center', textTransform: 'capitalize', letterSpacing: 1, backgroundImage: 'linear-gradient(to right,#f3001d,#ff004d)', color: '#fff', borderRadius: '100px', padding: '.75rem 2rem' ,mx:'auto', mt: { xs: 1, sm: 0 } }}>
                            see more
                        </Typography>
                    </Link>
                </Box>
            </Grid>
        </Grid >
    );
}

export default Movies;