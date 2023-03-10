import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { getMovie } from '../../services/MovieService';
import BackToMain from '../../components/constant/BackToMain';
import Videos from '../../components/pages/movie/trailersAndVideos/Videos';
import { Loader } from '../../components';
import TabPanel from '../../components/constant/TabPanel';
import VideosPanel from '../../components/pages/movie/trailersAndVideos/VideosPanel';

const videoType = ["Trailer", "Teaser", "Clip", "Behind the Scenes", "Blooper", "Featurette"];

const TrailersAndVideos = () => {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState({});
    const [videos, setVideos] = useState([]);

    const [value, setValue] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { status, data } = await getMovie(parseInt(movieId))
                if (status === 200) {
                    setLoading(false);
                    setMovie(data);
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
                    <Box sx={{ py: 5 }}>
                        <BackToMain media_type="movie" media_data={movie} searchParams={movieId} />
                        <Grid container spacing={{ xs: 3, sm: 1 }} sx={{ width: "100%", my: 5 }}>
                            <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
                                <VideosPanel
                                    videos={videos}
                                    videoType={videoType}
                                    value={value}
                                    setValue={setValue}
                                />
                            </Grid>
                            <Grid xs={12} sm={6} md={8} lg={8} xl={10}>
                                {
                                    videoType.map((type, index) => (
                                        <TabPanel key={index} value={value} index={index}>
                                            <Videos allVideos={videos} videoType={type} moiveTitle={movie} />
                                        </TabPanel>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </Box>
            }
        </>
    );
}

export default TrailersAndVideos;



