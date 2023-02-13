import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Button, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import BackToSeasonList from '../../components/pages/tvShows/tvShowSeason/BackToSeasonList';

import { getTvSeasonDetails } from '../../services/MovieService';

const TvShowSeason = () => {
    const { tvId, seasonId } = useParams();
    const [loading, setLoading] = useState(false);
    const [showGuestStars, setShowGuestStars] = useState(false);
    const [season, setSeason] = useState({});
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { status, data } = await getTvSeasonDetails(parseInt(tvId), parseInt(seasonId));
                if (status === 200) {
                    setLoading(false);
                    setSeason(data);
                    setEpisodes(data.episodes);
                }
            } catch (err) {
                setLoading(false);
                console.log(err.message);
            }
        }
        fetchData();
    }, [])
    return (
        <Box>
            <BackToSeasonList {...season} searchParams={tvId} />
            <Typography variant="h5" color="text.secondary" mb={2} sx={{ letterSpacing: 1 }}>{`Episodes ${episodes && episodes.length}`}</Typography>
            {
                episodes && episodes.map((item) => (
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Card key={item.id} sx={{ display: 'flex' }}>
                            <Avatar variant="rounded" sx={{ width: 227, height: 127 }} src={`https://www.themoviedb.org/t/p/w227_and_h127_bestv2${item.still_path}`} />
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body1" sx={{ letterSpacing: 1 }} gutterBottom>
                                        {`${item.episode_number}- ${item.name}`}
                                    </Typography>
                                    <Typography variant='body2'>{new Date(item.air_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</Typography>
                                </Box>
                                <Typography variant="caption" color="text.secondary" sx={{}}>{item.overview}</Typography>
                            </CardContent>
                        </Card>
                        <Button variant='outlined' sx={{mb:2}} onClick={() => setShowGuestStars(!showGuestStars)}>Guest Stars <ExpandMore /></Button>
                        {showGuestStars && <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-bettwen', gap: 1, my: 2 }}>
                            {
                                item.guest_stars && item.guest_stars.map((user) => (
                                    <Card key={user.id} sx={{ display: "flex", height: 66, mb: 1.5, width: 361 }}>
                                        <CardActionArea sx={{ width: 66, borderRadius: 1 }}>
                                            <Link to={`/person/${user.id}`} style={{ textDecoration: 'none' }}>
                                                <Avatar variant='rounded' sx={{ width: 66, height: 66 }} src={`https://www.themoviedb.org/t/p/w66_and_h66_face${user.profile_path}`} />
                                            </Link>
                                        </CardActionArea>
                                        <CardContent>
                                            <Link to={`/person/${user.id}`} style={{ textDecoration: 'none' }}>
                                                <Typography variant='body1' sx={{ color: '#fff', '&:hover': { color: 'text.secondary' } }}>{user.name}</Typography>
                                            </Link>
                                            <Typography variant='caption' color="text.secondary">
                                                {user.character}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                ))
                            }
                        </Box>}
                    </Box>
                ))
            }
        </Box>
    );
}

export default TvShowSeason;