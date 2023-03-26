import { useRef } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { grey, yellow } from '@mui/material/colors';
import { Avatar, Box, Chip, Typography } from '@mui/material';
import { GradeRounded, KeyboardArrowRight } from '@mui/icons-material';

import PreviousAndNextArrow from '../constant/PreviousAndNextArrow';
import { trendingSliderSettings } from '../constant/SliderSettings';

const TrendingMovies = ({ trendingMovies }) => {

    const sliderRef = useRef(null);

    return (
        <Box sx={{ mb: 6 }}>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 4
            }}>
                <Typography variant="h5" sx={{
                    fontSize: { xs: '1rem', sm: '1.5rem' },
                    letterSpacing: 1
                }}>Trending</Typography>
                <Link to={`/movie/trending`}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none'
                    }}>
                    <Typography variant="body2"
                        sx={{
                            fontWeight: '700',
                            color: grey[600],
                            '&:hover': { color: grey[300] },
                            letterSpacing: 1
                        }}>
                        See all
                    </Typography>
                    <KeyboardArrowRight sx={{ color: grey[600] }} />
                </Link>
            </Box>
            <Slider ref={sliderRef} {...trendingSliderSettings}>
                {
                    trendingMovies.results?.slice(0, 8).map((movie) => (
                        <Box key={movie.id} sx={{ position: 'relative', width: 1 }}>
                            <Avatar variant="rounded"
                                sx={{ width: 1, height: 300 }}
                                src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${movie.backdrop_path}`} />
                            <Box sx={{
                                position: 'absolute',
                                top: 0, right: 0, bottom: 0,
                                left: 0, backgroundColor: 'rgba(31.5, 31.5, 32, 0.70)'
                            }} />
                            <Box sx={{
                                width: 1, position: 'absolute',
                                bottom: 10, p: 3, display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                justifyContent: 'space-between',
                                alignItems: { xs: 'flex-start', sm: 'flex-end' }
                            }}>
                                <Box sx={{ maxWidth: 200 }}>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
                                        <Chip sx={{ backgroundColor: grey[900] }}
                                            icon={<GradeRounded fontSize='small'
                                                sx={{ color: `${yellow['A700']} !important` }} />}
                                            label={
                                                <Typography variant='body2'>{movie.vote_average.toFixed(1)}</Typography>
                                            } />
                                        <Chip sx={{ backgroundColor: grey[900] }} label={movie.release_date.slice(0, 4)} />
                                    </Box>
                                    <Link to={`/movie/${movie.id}-${movie.title?.split(/[\W]/)
                                        .join("-")
                                        .split("--")
                                        .join("-")
                                        .toLowerCase()}`} style={{ textDecoration: 'none' }}>
                                        <Typography sx={{ width: 137, mt: 2, letterSpacing: 1, color: '#fff', '&:hover': { color: 'text.secondary' } }}>{movie.title}</Typography>
                                    </Link>
                                </Box>
                                <Link to={`/movie/${movie.id}-${movie.title?.split(/[\W]/)
                                    .join("-")
                                    .split("--")
                                    .join("-")
                                    .toLowerCase()}`} style={{ textDecoration: 'none' }}>
                                    <Typography sx={{
                                        textAlign: 'center',
                                        textTransform: 'capitalize',
                                        letterSpacing: 1,
                                        background: 'linear-gradient(to right,#f3001d,#ff004d)',
                                        '&:hover': { background: 'linear-gradient(to right,#ff1632,#ff2164)' },
                                        color: '#fff',
                                        transform: 'skew(-15deg)',
                                        borderRadius: '10px',
                                        padding: { xs: '.15rem .75rem', sm: '.25rem 1rem', md: '.5rem 2rem' },
                                        mt: { xs: 1, sm: 0 }
                                    }}>
                                        view more
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                    ))
                }
            </Slider>
            <PreviousAndNextArrow sliderRef={sliderRef} />
        </Box>
    );
}

export default TrendingMovies;