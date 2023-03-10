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

import { getLanguagesList, getMovie } from '../../services/MovieService';
import BackToMain from '../../components/constant/BackToMain';
import { Loader } from '../../components';
import Images from '../../components/pages/movie/backdrops/Images';
import TabPanel from '../../components/constant/TabPanel';

function tabProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const Backdrops = () => {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState({});
    const [images, setImages] = useState([]);
    const [languagesList, setLanguagesList] = useState([]);
    const [imageType] = useState(new Set());
    const imageTypeToArray = [...imageType];

    if (images) {
        images.map((image) => imageType.add(image.iso_639_1))
    }

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const displayLengthItem = (item) => {
        let results = images.filter(image => image.iso_639_1 === item);
        return results.length;
    };

    const displayLanguage = (imageLanguage) => {
        let result;
        if (typeof imageLanguage !== 'string') {
            result = 'No Language';
        } else {
            result = languagesList.find(item => item.iso_639_1 === imageLanguage);
            result = result && result.english_name;
        }
        return <Typography key={result} variant="subtitle2" sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>{result}</Typography>
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { status, data } = await getMovie(parseInt(movieId));
                const { data: languageData } = await getLanguagesList();
                if (status === 200) {
                    setLoading(false);
                    setMovie(data);
                    setImages(data.images.backdrops);
                    setLanguagesList(languageData);
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
                        <BackToMain media_type="movie" media_data={movie} searchParams={movieId}  />
                        <Grid container spacing={{ xs: 3, sm: 2 }} sx={{ width: "100%", my: 5 }}>
                            <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
                                <Card sx={{ maxWidth: 258 }}>
                                    <CardHeader
                                        title="Backdrops"
                                        sx={{ backgroundColor: teal[500], textAlign: 'center' }}
                                    />
                                    <CardContent>
                                        <Tabs
                                            orientation="vertical"
                                            value={value}
                                            onChange={handleChange}
                                            aria-label="vertical tabs example"
                                            sx={{
                                                borderRight: 1,
                                                borderColor: "divider",
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
                                                imageTypeToArray.map((image, index) => (
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
                                                                {
                                                                    displayLanguage(image)
                                                                }
                                                                <Chip
                                                                    label={
                                                                        <Typography
                                                                            variant="caption"
                                                                            color="text.primary"
                                                                            sx={{
                                                                                ".Mui-selected": { color: yellow[500] },
                                                                            }}
                                                                        >
                                                                            {displayLengthItem(image)}
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
                                    imageTypeToArray.map((image, index) => (
                                        <TabPanel key={index} value={value} index={index}>
                                            <Images allImages={images} imageType={image} moiveTitle={movie} />
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

export default Backdrops;