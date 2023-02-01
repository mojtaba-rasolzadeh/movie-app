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

import { getMovie } from '../../services/MovieService';
import BackToMain from '../../components/pages/movie/BackToMain';
import Videos from '../../components/pages/movie/trailersAndVideos/Videos';
import { Loader } from '../../components';


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


const TrailersAndVideos = () => {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState({});
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
                        <BackToMain movie={movie} />
                        <Grid container spacing={{ xs: 3, sm: 2 }} sx={{ width: "100%", my: 5 }}>
                            <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
                                <Card sx={{ maxWidth: 258, height: 385 }}>
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
                                                height: 288,
                                                ".Mui-selected": {
                                                    backgroundColor: grey[800],
                                                    color: "#ffeb3b!important",
                                                },
                                                ".MuiTabs-indicator": {
                                                    backgroundColor: yellow[500],
                                                },
                                            }}
                                        >
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Trailers</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("Trailer")}
                                                                    {/* {movies.total_results !== undefined && (movies.total_results).toLocaleString()} */}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{
                                                                backgroundColor: orange[500],
                                                            }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(0)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Teasers</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("Teaser")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(1)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Clips</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("Clip")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        //   sx={{ backgroundColor: value === 1 && orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(2)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>
                                                            Behind the Scenes
                                                        </Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("Behind the Scenes")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(3)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Bloopers
                                                        </Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": {
                                                                            backgroundColor: yellow[500],
                                                                        },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("Blooper")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(4)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                            <Tab
                                                label={
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>Featurettes</Typography>
                                                        <Chip
                                                            label={
                                                                <Typography
                                                                    variant="caption"
                                                                    color="text.primary"
                                                                    sx={{
                                                                        ".Mui-selected": { color: yellow[500] },
                                                                    }}
                                                                >
                                                                    {displayLengthItem("Featurettes")}
                                                                </Typography>
                                                            }
                                                            size="small"
                                                            sx={{ backgroundColor: orange[500] }}
                                                        />
                                                    </Box>
                                                }
                                                {...tabProps(5)}
                                                sx={{
                                                    borderRadius: 1,
                                                    mr: 1,
                                                }}
                                            />
                                        </Tabs>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid xs={12} sm={6} md={8} lg={9} xl={10}>
                                <TabPanel value={value} index={0}>
                                    <Videos allVideos={videos} videoType="Trailer" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <Videos allVideos={videos} videoType="Teaser" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <Videos allVideos={videos} videoType="Clip" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    <Videos allVideos={videos} videoType="Behind the Scenes" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={4}>
                                    <Videos allVideos={videos} videoType="Blooper" moiveTitle={movie} />
                                </TabPanel>
                                <TabPanel value={value} index={5}>
                                    <Videos allVideos={videos} videoType="Featurettes" moiveTitle={movie} />
                                </TabPanel>
                            </Grid>
                        </Grid>
                    </Box>
            }
        </>
    );
}

export default TrailersAndVideos;



