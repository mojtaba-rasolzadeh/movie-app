import { Link } from 'react-router-dom';
import { Avatar, Box, Chip, Typography } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';
import { KeyboardArrowRight, GradeRounded } from '@mui/icons-material';
import Slider from 'react-slick';

const TopRate = ({ topRatedMovies }) => {
    const settings = {
        dots: true,
        arrows: false,
        autoplay:true,
        autoplaySpeed:4000,
        infinite: true,
        speed: 3000,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 2500,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                }
            },
            {
                breakpoint: 2300,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 1940,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    dots: true
                }
            },
            {
                breakpoint: 1550,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 533,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false,
                    arrows: true
                }
            },
        ]
    };
    return (
        <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
                    <Typography variant="h5" sx={{
                        fontSize: { xs: '1rem', sm: '1.5rem' }, fontWeight: 700,
                        backgroundImage: 'linear-gradient(to right,#f3001d,#ff004d)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: 1
                    }}>Top rated</Typography>
                    <GradeRounded sx={{ color: `${yellow['A700']} !important` }} />
                </Box>
                <Link to="/movie/top_rated" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <Typography variant="body2" sx={{ fontWeight: '700', color: grey[600], '&:hover': { color: grey[300] }, letterSpacing: 1 }}>
                        See all
                    </Typography>
                    <KeyboardArrowRight sx={{ color: grey[600] }} />
                </Link>
            </Box>
            <Slider {...settings}>
                {
                    topRatedMovies.results?.slice(0, 8).map((movie) => (
                        <Box key={movie.id} sx={{ position: 'relative', width: 1, mb: 2, borderRadius: '20px' }}>
                            <Avatar variant="rounded" sx={{ width: 1, height: 330, borderRadius: '20px' }} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} />
                            <Box sx={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, width: 1, backgroundImage: 'linear-gradient(to top, rgb(32 32 32 / 94%) 90px, rgb(12 11 2 / 0%) 100%)', borderRadius: '17px' }} />
                            <Box sx={{ width: 1, position: 'absolute', bottom: 10, p: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                <Box sx={{ maxWidth: 200 }}>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 1 }}>
                                        <Chip size='small' sx={{ backgroundColor: grey[900] }} icon={<GradeRounded fontSize='small' sx={{ color: `${yellow['A700']} !important` }} />} label={
                                            <Typography variant='caption'>{movie.vote_average.toFixed(1)}</Typography>
                                        } />
                                        <Chip size='small' sx={{ backgroundColor: grey[900] }} label={
                                            <Typography variant='caption'>{movie.release_date.slice(0, 4)}</Typography>
                                        } />
                                    </Box>
                                    <Link to={`/movie/${movie.id}`} style={{ textAlign: 'center !important', textDecoration: 'none' }}>
                                        <Typography variant="body2" sx={{ textAlign: 'center', letterSpacing: 1, color: '#fff', '&:hover': { color: 'text.secondary' } }}>{movie.title}</Typography>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    ))
                }
            </Slider>
        </Box>
    );
}

export default TopRate;