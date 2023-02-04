import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    Tabs,
    Tab,
    Typography,
    Card,
    CardHeader,
    CardContent,
    Chip,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { grey, orange, teal, yellow } from "@mui/material/colors";

import { getTv } from '../../services/MovieService';
import BackToMain from '../../components/constant/BackToMain';
import { Loader } from '../../components';
import Videos from '../../components/pages/tvShows/trailersAndVideos/Videos';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

function tabProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const videoType = ["Trailer", "Teaser", "Clips", "Behind the Scenes","Opening Credits", "Blooper", "Featurette"];

const TrailersAndVideos = () => {
    const { tvId } = useParams();
    const [loading, setLoading] = useState(false);
    const [tvShow, setTvShow] = useState({});
    const [videos, setVideos] = useState([]);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const displayLengthItem = (item) => {
        let results = videos.filter(video => video.type === item);
        return results.length;
    };

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
                    <Box sx={{ py: 5 }}>
                        <BackToMain media_data={tvShow} media_type="tv" searchParams={tvId} />
                        <Grid container spacing={{ xs: 3, sm: 2 }} sx={{ width: "100%", my: 5 }}>
                            <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
                                <Card sx={{ maxWidth: 258 }}>
                                    <CardHeader
                                        title="Videos"
                                        sx={{ backgroundColor: teal[500], textAlign: 'center' }}
                                    />
                                    <CardContent>
                                        <Tabs
                                            orientation="vertical"
                                            // variant="scrollable"
                                            value={value}
                                            onChange={handleChange}
                                            aria-label="vertical tabs example"
                                            sx={{
                                                borderRight: 1,
                                                borderColor: "divider",
                                                // height: 288,
                                                ".Mui-selected": {
                                                    backgroundColor: grey[800],
                                                    color: "#ffeb3b!important",
                                                },
                                                ".MuiTabs-indicator": {
                                                    backgroundColor: yellow[500],
                                                },
                                            }}
                                        >
                                            {
                                                videoType.sort().map((type, index) => (
                                                    <Tab
                                                        key={index}
                                                        label={
                                                            <Box
                                                                sx={{
                                                                    width: "100%",
                                                                    display: "flex",
                                                                    justifyContent: "space-between",
                                                                    alignItems: "center",
                                                                }}
                                                            >
                                                                <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>{type}</Typography>
                                                                <Chip
                                                                    label={
                                                                        <Typography
                                                                            variant="caption"
                                                                            color="text.primary"
                                                                            sx={{
                                                                                ".Mui-selected": { color: yellow[500] },
                                                                            }}
                                                                        >
                                                                            {displayLengthItem(type)}
                                                                        </Typography>
                                                                    }
                                                                    size="small"
                                                                    sx={{
                                                                        backgroundColor: orange[500],
                                                                    }}
                                                                />
                                                            </Box>
                                                        }
                                                        {...tabProps(index)}
                                                        sx={{
                                                            borderRadius: 1,
                                                            mr: 1,
                                                        }}
                                                    />
                                                ))
                                            }
                                        </Tabs>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid xs={12} sm={6} md={8} lg={9} xl={10}>
                                {
                                    videoType.map((type, index) => (
                                        <TabPanel key={index} value={value} index={index}>
                                            <Videos allVideos={videos} videoType={type} tvTitle={tvShow} />
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



