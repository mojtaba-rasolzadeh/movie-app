import { Link } from 'react-router-dom';
import { Avatar, Box, Card, CardActionArea, CardContent, Chip, Rating, Typography } from '@mui/material';
import { deepOrange, grey, orange, red, yellow } from '@mui/material/colors';
import { KeyboardArrowRight, GradeRounded, PlayCircleOutline } from '@mui/icons-material';
import Slider from 'react-slick';

const NowPlayingMovies = ({ nowPlayingMovies }) => {

    const settings = {
        dots: true,
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
                breakpoint: 1900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
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
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
                    <Typography variant="h5" sx={{ fontSize: { xs: '1rem', sm: '1.5rem' }, letterSpacing: 1 }}>Now Playing Movies</Typography>
                    <PlayCircleOutline sx={{ color: `${red[500]} !important` }} />
                </Box>
                <Link to='/movie/now_playing' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <Typography variant="body2" sx={{ fontWeight: '700', color: grey[600], '&:hover': { color: grey[300] }, letterSpacing: 1 }}>
                        See all
                    </Typography>
                    <KeyboardArrowRight sx={{ color: grey[600] }} />
                </Link>
            </Box>
            {/* <Box sx={{ display: 'flex', width: 1, overflowX: 'auto', gap: 2 }}> */}
            <Slider {...settings}>
                {
                    nowPlayingMovies.results?.slice(0, 8).map((movie) => (
                        <Card key={movie.id} sx={{
                            display: 'flex!important',
                            //  width: '450px!important',
                            flexDirection:{xs:'column',sm:'row  '},
                            width: 1,
                            height: {xs:'auto',sm:250}, p: 1.5, borderRadius: '20px'
                        }}>
                            <CardActionArea sx={{ width: 150, borderRadius: '20px' }}>
                                <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
                                    <Avatar variant="rounded" sx={{
                                        width: 150,
                                        // , height: 225
                                        height: 1
                                        , borderRadius: '20px'
                                    }} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} />
                                </Link>
                            </CardActionArea>
                            <CardContent>
                                <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
                                    <Typography variant="body2" sx={{ letterSpacing: 1, color: '#fff', '&:hover': { color: 'text.secondary' }, display: '-webkit-box', textOverflow: 'ellipsis', overflow: 'hidden', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }} >{movie.title}</Typography>
                                </Link>
                                <Typography component="p" variant="caption" color="text.secondary" sx={{ letterSpacing: 1 }} gutterBottom>
                                    {new Date(movie.release_date).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' })}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Rating sx={{ flexWrap: 'wrap' }} name="half-rating-read" value={movie.vote_average} precision={0.5} max={10} readOnly size="small" />
                                    <Typography variant='caption'>{movie.vote_average.toFixed(1)}</Typography>
                                </Box>
                                <Typography variant="caption" sx={{ mt: 1, color: 'text.secondary', letterSpacing: 1, display: '-webkit-box', textOverflow: 'ellipsis', overflow: 'hidden', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }} >{movie.overview}</Typography>
                                <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
                                    <Typography sx={{ fontSize: '.9rem', textAlign: 'center', textTransform: 'capitalize', letterSpacing: 1, backgroundColor: grey[800], '&:hover': { backgroundImage: 'linear-gradient(to right,#f3001d,#ff004d)' }, color: '#fff', transform: 'skew(-15deg)', borderRadius: '10px', padding: '.5rem .5rem', mt: 1 }}>
                                        Watch Now
                                    </Typography>
                                </Link>
                            </CardContent>
                        </Card>
                    ))
                }
            </Slider>
            {/* </Box> */}
        </Box>
    );
}

export default NowPlayingMovies;
{/* <Box key={movie.id} sx={{
    position: 'relative',
    //  width: 150
    width: 1
    // , height: 225
    , mb: 2, borderRadius: '20px'
}}>
    <Avatar variant="rounded" sx={{
        //  width: 150
        width: 1
        // , height: 225
        , height: 330
        , borderRadius: '20px'
    }} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} />
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
        <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
            <Typography sx={{ fontSize: '.9rem', textAlign: 'center', textTransform: 'capitalize', letterSpacing: 1, backgroundImage: 'linear-gradient(to right,#f3001d,#ff004d)', color: '#fff', transform: 'skew(-15deg)', borderRadius: '10px', padding: '.25rem 1rem', mt: 2 }}>
                Watch Now
            </Typography>
        </Link>
        {/* <Button type="button" sx={{ textTransform: 'capitalize', letterSpacing: 1, backgroundImage: 'linear-gradient(to right,#f3001d,#ff004d)', color: '#fff', transform: 'skew(-15deg)', borderRadius: '10px', padding: '.25rem 1rem', mt: 2 }}>
                                    Watch Now
                                </Button> */}
    // </Box>
// </Box> 