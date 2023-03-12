import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { Box, Divider } from '@mui/material';

import { getTvSeasonDetails } from '../../services/MovieService';
import { BackToSeasonList, EpisodesLength, Episode, GuestStarItemLength, GuestStar, Crews, CrewItemLength, EpisodesMenu } from '../../components/pages/tvShows/tvShowSeason';
import { Loader } from '../../components';

const TvShowSeason = () => {
    const { tvId, seasonId } = useParams();
    const [loading, setLoading] = useState(false);
    const [season, setSeason] = useState({});
    const [episodes, setEpisodes] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0)

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
        <>
            {
                loading ? <Loader /> :
                    <>
                        {/* <Helmet>
                            <title>{`${tvShow.name} (TV Series ${tvShow.first_air_date?.slice(0, 4)})`} | Movie App</title>
                            </Helmet> */}
                        <Box>
                            <BackToSeasonList {...season} searchParams={tvId} />
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                <EpisodesLength episodes={episodes} />
                                <EpisodesMenu episodes={episodes} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
                            </Box>
                            <Divider />
                            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 4 }}>
                                <Episode {...episodes[selectedIndex]} />
                                <Box sx={{ mb: 4 }}>
                                    <GuestStarItemLength episode={episodes[selectedIndex]} />
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                                        {
                                            episodes[selectedIndex]?.guest_stars.map((user) => (
                                                <GuestStar key={user.id} {...user} />
                                            ))
                                        }
                                    </Box>
                                </Box>
                                <Divider />
                                <Box>
                                    <CrewItemLength episode={episodes[selectedIndex]} />
                                    <Crews crew={episodes[selectedIndex]?.crew} />
                                </Box>
                            </Box>
                        </Box>
                    </>
            }
        </>
    );
}

export default TvShowSeason;