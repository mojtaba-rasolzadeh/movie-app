import { Link } from 'react-router-dom';
import { Avatar, Box, CardActionArea, Rating, Typography } from '@mui/material';
import { pink, yellow } from '@mui/material/colors';
import { AutoGraph } from '@mui/icons-material';

const PopularMovies = ({ popularMovies }) => {
    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AutoGraph sx={{ color: yellow['A700'] }} /> <Typography variant="h5" sx={{
                    fontWeight: 700,
                    backgroundImage: 'linear-gradient(to right,#f3001d,#ff004d)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: 1
                }}>Popular</Typography>
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
                                <Rating sx={{ flexWrap: 'wrap' }} name="half-rating-read" value={movie.vote_average} precision={0.5} max={10} readOnly size="small" />
                            </Box>
                        </Box>
                    ))
                }
            </Box>
            <Link to="/movie/popular" style={{ textDecoration: 'none' }}>
                <Typography sx={{ width: { sm: 1, xl: '70%' }, textAlign: 'center', textTransform: 'capitalize', letterSpacing: 1, backgroundColor: '#f3001d', color: '#fff', borderRadius: '100px', padding: '.75rem 2rem', mx: 'auto', mt: { xs: 1, sm: 0 } }}>
                    see more
                </Typography>
            </Link>
        </Box>
    );
}

export default PopularMovies;