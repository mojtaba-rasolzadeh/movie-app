import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import { Avatar, Box, Button, Chip, Typography } from '@mui/material';
import { grey, orange, pink, yellow } from '@mui/material/colors';
import { GradeRounded, KeyboardArrowRight } from '@mui/icons-material';
import Slider from 'react-slick';

import { getTrending } from '../../../services/MovieService';

const Movies = () => {
    const [loading, setLoading] = useState(false);
    const [trendingMovies, setTrendingMovies] = useState({});
    console.log(trendingMovies);

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
                const { status, data } = await getTrending('movie', 'week');
                if (status === 200) {
                    setLoading(false);
                    setTrendingMovies(data);
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
                <Box>
                    <Box sx={{ display: 'flex',flexWrap:'wrap', alignItems: 'center', justifyContent: 'space-between',mb:4 }}>
                        <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.5rem' }, letterSpacing: 1 }}>Trending Movies</Typography>
                        <Link to={`/movie/trending-movies`} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                            <Typography variant="body2" sx={{ color: grey[600], '&:hover': { color: grey[300] }, letterSpacing: 1 }}>
                                See all
                            </Typography>
                            <KeyboardArrowRight sx={{ color: grey[600] }} />
                        </Link>
                    </Box>
                    {/* <Box sx={{
                        // width: '100%',
                        // display: 'flex',
                        gap: 1,
                        overflowX: 'auto',
                        mt: 4
                    }}> */}
                    <Slider {...settings}>
                        {
                            trendingMovies.results?.slice(0, 8).map((movie) => (
                                <Box key={movie.id} sx={{ position: 'relative', maxWidth: 470, width: 1 }}>
                                    <Avatar variant="rounded" sx={{ maxWidth: '470px', width: 1, height: 300 }} src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${movie.backdrop_path}`} />
                                    <Box sx={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(31.5, 31.5, 32, 0.70)' }} />
                                    <Box sx={{ width: 1, position: 'absolute', bottom: 10, p: 3, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'flex-end' } }}>
                                        <Box sx={{ maxWidth: 200 }}>
                                            <Box sx={{ display: 'flex', flexWrap:'wrap',alignItems: 'center', gap: 1 }}>
                                                <Chip sx={{ backgroundColor: grey[900] }} icon={<GradeRounded fontSize='small' sx={{ color: `${orange[700]} !important` }} />} label={
                                                    <Typography variant='body2'>{movie.vote_average.toFixed(1)}</Typography>
                                                } />
                                                <Chip sx={{ backgroundColor: grey[900] }} label={movie.release_date.slice(0, 4)} />
                                            </Box>
                                            <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
                                                <Typography sx={{ mt: 2, letterSpacing: 1, color: '#fff', '&:hover': { color: 'text.secondary' } }}>{movie.title}</Typography>
                                            </Link>
                                        </Box>
                                        <Button type="button" sx={{ textTransform: 'capitalize', letterSpacing: 1, backgroundImage: 'linear-gradient(to right,#f3001d,#ff004d)', color: '#fff', transform: 'skew(-15deg)', borderRadius: '10px', padding: { xs: '.15rem .75rem', sm: '.25rem 1rem', md: '.5rem 2rem' }, mt: { xs: 1, sm: 0 } }}>
                                            Watch Now
                                        </Button>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Slider>
                    {/* </Box> */}
                </Box>
            </Grid>
            <Grid xs={3}>2</Grid>
        </Grid >
    );
}

export default Movies;