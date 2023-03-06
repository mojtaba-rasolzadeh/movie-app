import { Link } from 'react-router-dom';
import { Avatar, Box, Chip, Typography } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';
import { GradeRounded, KeyboardArrowRight } from '@mui/icons-material';
import Slider from 'react-slick';

const Trending = ({ trending }) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
                breakpoint: 1860,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false
                }
            },
        ]
    };
    return (
        <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
                <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.5rem' }, letterSpacing: 1 }}>Trending</Typography>
                <Link to={`/tv/trending`} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <Typography variant="body2" sx={{ fontWeight: '700', color: grey[600], '&:hover': { color: grey[300] }, letterSpacing: 1 }}>
                        See all
                    </Typography>
                    <KeyboardArrowRight sx={{ color: grey[600] }} />
                </Link>
            </Box>
            <Slider {...settings}>
                {
                    trending.results?.slice(0, 8).map((tv) => (
                        <Box key={tv.id} sx={{ position: 'relative', width: 1 }}>
                            <Avatar variant="rounded" sx={{ width: 1, height: 300 }} src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${tv.backdrop_path}`} />
                            <Box sx={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(31.5, 31.5, 32, 0.70)' }} />
                            <Box sx={{ width: 1, position: 'absolute', bottom: 10, p: 3, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'flex-end' } }}>
                                <Box sx={{ maxWidth: 200 }}>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
                                        <Chip sx={{ backgroundColor: grey[900] }} icon={<GradeRounded fontSize='small' sx={{ color: `${yellow['A700']} !important` }} />} label={
                                            <Typography variant='body2'>{tv.vote_average.toFixed(1)}</Typography>
                                        } />
                                        <Chip sx={{ backgroundColor: grey[900] }} label={tv.first_air_date.slice(0, 4)} />
                                    </Box>
                                    <Link to={`/tv/${tv.id}`} style={{ textDecoration: 'none' }}>
                                        <Typography sx={{ width: 137, mt: 2, letterSpacing: 1, color: '#fff', '&:hover': { color: 'text.secondary' } }}>{tv.name}</Typography>
                                    </Link>
                                </Box>
                                <Link to={`/tv/${tv.id}`} style={{ textDecoration: 'none' }}>
                                    <Typography sx={{ textAlign: 'center', textTransform: 'capitalize', letterSpacing: 1, backgroundImage: 'linear-gradient(to right,#f3001d,#ff004d)', color: '#fff', transform: 'skew(-15deg)', borderRadius: '10px', padding: { xs: '.15rem .75rem', sm: '.25rem 1rem', md: '.5rem 2rem' }, mt: { xs: 1, sm: 0 } }}>
                                        Watch Now
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                    ))
                }
            </Slider>
        </Box>
    );
}

export default Trending;