import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Avatar, Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';

import { getTv } from '../../services/MovieService';
import BackToMain from '../../components/constant/BackToMain';
import { Loader } from '../../components';

const AllSeasons = () => {
    const { tvId } = useParams();
    const [loading, setLoading] = useState(false);
    const [tvShow, setTvShow] = useState([]);
    const [seasons, setSeasons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { status, data } = await getTv(parseInt(tvId));
                if (status === 200) {
                    setLoading(false);
                    setTvShow(data);
                    setSeasons(data.seasons);
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
                        <BackToMain media_data={tvShow} media_type="tv" searchParams={tvId} />
                        <Box>
                            {
                                seasons && seasons.map((season, index) => (
                                    <Card key={index} sx={{ display: 'flex', height: 150, mb: 3 }}>
                                        <CardActionArea sx={{ width: 100, borderRadius: 1 }}>
                                            <Link to={`/tv/${tvShow && tvShow.id}-${tvShow &&
                                                tvShow.name
                                                    .split(/[\s:,]/)
                                                    .join("-")
                                                    .split("--")
                                                    .join("-")
                                                    .toLowerCase()
                                                }/season/${season && season.season_number}`}
                                                style={{ textDecoration: 'none' }}
                                            >
                                                <Avatar variant='rounded' sx={{ width: 100, height: 150 }} src={`https://www.themoviedb.org/t/p/w130_and_h195_bestv2${season && season.poster_path}`} alt={season && season.name} />
                                            </Link>
                                        </CardActionArea>
                                        <CardContent>
                                            <Link to={`/tv/${tvShow && tvShow.id}-${tvShow &&
                                                tvShow.name
                                                    .split(/[\s:,]/)
                                                    .join("-")
                                                    .split("--")
                                                    .join("-")
                                                    .toLowerCase()
                                                }/season/${season && season.season_number}`}
                                                style={{ textDecoration: 'none' }}
                                            >
                                                <Typography variant="h5" sx={{ letterSpacing: 1, color: "#fff", '&:hover': { color: 'text.secondary' } }}>
                                                    {season && season.name}
                                                </Typography>
                                            </Link>
                                            <Typography variant='subtitle1'>
                                                {`${season && season.air_date.substring(0, 4)} | ${season && season.episode_count} Episodes`}
                                            </Typography>
                                            <Typography
                                                variant="subtitle2"
                                                color="text.secondary"
                                                sx={{
                                                    letterSpacing: 1,
                                                    mt: 3
                                                }}
                                            >
                                                {`${season && season.name} of ${tvShow && tvShow.name} premiered on ${new Date(season && season.air_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.`}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                ))
                            }
                        </Box>
                    </>
            }
        </>
    )
}
export default AllSeasons;