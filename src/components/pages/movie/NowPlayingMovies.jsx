import { useRef } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { grey, yellow } from '@mui/material/colors';
import { KeyboardArrowRight, PlayCircleOutline } from '@mui/icons-material';
import { Avatar, Box, Card, CardActionArea, CardContent, Rating, Typography } from '@mui/material';

import PreviousAndNextArrow from '../constant/PreviousAndNextArrow';
import { nowPlayingSliderSettings } from '../constant/SliderSettings';

const NowPlayingMovies = ({ nowPlayingMovies }) => {

    const sliderRef = useRef(null);

    return (
        <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
                    <Typography variant="h5" sx={{
                        fontSize: { xs: '1rem', sm: '1.5rem' },
                        letterSpacing: 1
                    }}>Now Playing</Typography>
                    <PlayCircleOutline sx={{ color: `${yellow[500]} !important` }} />
                </Box>
                <Link to='/movie/now_playing' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <Typography variant="body2" sx={{ fontWeight: '700', color: grey[600], '&:hover': { color: grey[300] }, letterSpacing: 1 }}>
                        See all
                    </Typography>
                    <KeyboardArrowRight sx={{ color: grey[600] }} />
                </Link>
            </Box>
            <Slider ref={sliderRef} {...nowPlayingSliderSettings}>
                {
                    nowPlayingMovies.results?.slice(0, 8).map((movie) => (
                        <Card key={movie.id} sx={{
                            display: 'flex!important',
                            flexDirection: { xs: 'column', sm: 'row  ' },
                            alignItems: 'flex-start', width: 1, height: { xs: 'auto', sm: 250 }, p: 1.5, borderRadius: '20px'
                        }}>
                            <CardActionArea sx={{ width: 150, borderRadius: '20px' }}>
                                <Link to={`/movie/${movie.id}-${movie.title?.split(/[\W]/)
                                    .join("-")
                                    .split("--")
                                    .join("-")
                                    .toLowerCase()}`} style={{ textDecoration: 'none' }}>
                                    <Avatar variant="rounded" sx={{
                                        width: 150,
                                        height: 1,
                                        borderRadius: '20px'
                                    }}
                                        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} />
                                </Link>
                            </CardActionArea>
                            <CardContent>
                                <Link to={`/movie/${movie.id}-${movie.title?.split(/[\W]/)
                                    .join("-")
                                    .split("--")
                                    .join("-")
                                    .toLowerCase()}`} style={{ textDecoration: 'none' }}>
                                    <Typography variant="body2" sx={{ letterSpacing: 1, color: '#fff', '&:hover': { color: 'text.secondary' }, display: '-webkit-box', textOverflow: 'ellipsis', overflow: 'hidden', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }} >{movie.title}</Typography>
                                </Link>
                                <Typography component="p" variant="caption" color="text.secondary" sx={{ letterSpacing: 1 }} gutterBottom>
                                    {new Date(movie.release_date).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' })}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Rating sx={{ flexWrap: 'wrap' }} name="half-rating-read" value={movie.vote_average} precision={0.5} max={10} readOnly size="small" />
                                    <Typography variant='caption'>{movie.vote_average.toFixed(1)}</Typography>
                                </Box>
                                <Typography variant="caption" sx={{
                                    mt: 1,
                                    color: 'text.secondary',
                                    letterSpacing: 1,
                                    display: '-webkit-box',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    WebkitLineClamp: 4,
                                    WebkitBoxOrient: 'vertical'
                                }} >{movie.overview}</Typography>
                                <Link to={`/movie/${movie.id}-${movie.title?.split(/[\W]/)
                                    .join("-")
                                    .split("--")
                                    .join("-")
                                    .toLowerCase()}`} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                                    <Typography sx={{
                                        fontSize: '.9rem',
                                        textAlign: 'center',
                                        textTransform: 'capitalize',
                                        letterSpacing: 1,
                                        backgroundColor: grey[800],
                                        '&:hover': { backgroundImage: 'linear-gradient(to right,#f3001d,#ff004d)' },
                                        color: '#fff', transform: 'skew(-15deg)',
                                        borderRadius: '10px',
                                        padding: '.5rem .5rem',
                                        mt: 1
                                    }}>
                                        view more
                                    </Typography>
                                </Link>
                            </CardContent>
                        </Card>
                    ))
                }
            </Slider>
            <PreviousAndNextArrow sliderRef={sliderRef} />
        </Box>
    );
}

export default NowPlayingMovies;