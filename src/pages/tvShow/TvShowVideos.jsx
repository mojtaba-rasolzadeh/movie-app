import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { getTv } from '../../services/MovieService';
import BackToMain from '../../components/constant/BackToMain';
import { Loader } from '../../components';
import TabPanel from '../../components/constant/TabPanel';
import VideosPanel from '../../components/pages/tvShows/trailersAndVideos/VideosPanel';
import Videos from '../../components/pages/constant/trailersAndVideos/Videos';

const videoType = ["Trailer", "Teaser", "Clips", "Behind the Scenes", "Opening Credits", "Blooper", "Featurette"];

const TvShowVideos = () => {
    const { tvId } = useParams();
    const [loading, setLoading] = useState(false);
    const [tvShow, setTvShow] = useState({});
    const [videos, setVideos] = useState([]);
    const [value, setValue] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { status, data } = await getTv(parseInt(tvId))
                if (status === 200) {
                    setLoading(false);
                    setTvShow(data);
                    setVideos(data.videos.results);
                }
            } catch (err) {
                setLoading(false);
                console.log(err.message);
            }
        }
        fetchData();
    }, []);
    return (
        <>
            {
                loading ? <Loader /> :
                    <>
                        <Helmet>
                            <title>{`${tvShow.name} (TV Series ${tvShow.first_air_date?.slice(0, 4)}) - Videos`} | Movie App</title>
                        </Helmet>
                        <Box sx={{ py: 5 }}>
                            <BackToMain media_data={tvShow} media_type="tv" searchParams={tvId} />
                            <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 4 }} sx={{ width: "100%", my: 5 }}>
                                <Grid xs={12} sm={7} md={4} lg={4} xl={2}>
                                    <VideosPanel
                                        videos={videos}
                                        videoType={videoType}
                                        value={value}
                                        setValue={setValue}
                                    />
                                </Grid>
                                <Grid xs={12} sm={12} md={8} lg={8} xl={10}>
                                    {
                                        videoType.map((type, index) => (
                                            <TabPanel key={index} value={value} index={index}>
                                                <Videos allVideos={videos} videoType={type} mediaTitle={tvShow.name} />
                                            </TabPanel>
                                        ))
                                    }
                                </Grid>
                            </Grid>
                        </Box>
                    </>
            }
        </>
    );
}

export default TvShowVideos;