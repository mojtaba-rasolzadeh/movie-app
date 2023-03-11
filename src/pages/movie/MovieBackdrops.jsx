import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { getLanguagesList, getMovie } from '../../services/MovieService';
import BackToMain from '../../components/constant/BackToMain';
import { Loader } from '../../components';
import Images from '../../components/pages/movie/backdrops/Images';
import TabPanel from '../../components/constant/TabPanel';
import BackdropsPanel from '../../components/pages/movie/backdrops/BackdropsPanel';

const MovieBackdrops = () => {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState({});
    const [images, setImages] = useState([]);
    const [languagesList, setLanguagesList] = useState([]);
    const [imageLanguage] = useState(new Set());
    const imageLanguageArray = [...imageLanguage];
    const [value, setValue] = useState(0);

    if (images) { images.map((image) => imageLanguage.add(image.iso_639_1)) }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const displayLengthItem = (item) => {
        return images
            .filter(image => image.iso_639_1 === item)?.length;
    };

    const displayLanguage = (imageLanguage) => {
        if (typeof imageLanguage !== 'string') {
            return 'No Language';
        } else {
            return languagesList
                .find(item => item.iso_639_1 === imageLanguage)?.english_name;
        }
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
                    <>
                        <Helmet>
                            <title>{`${movie.title} (${movie.release_date?.slice(0, 4)}) - Backdrops`} | Movie App</title>
                        </Helmet>
                        <Box sx={{ py: 5 }}>
                            <BackToMain media_type="movie" media_data={movie} searchParams={movieId} />
                            <Grid container spacing={{ xs: 3, sm: 2 }} sx={{ width: "100%", my: 5 }}>
                                <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
                                    <BackdropsPanel
                                        value={value}
                                        handleChange={handleChange}
                                        imageLanguageArray={imageLanguageArray}
                                        displayLanguage={displayLanguage}
                                        displayLengthItem={displayLengthItem}
                                    />
                                </Grid>
                                <Grid xs={12} sm={6} md={8} lg={9} xl={10}>
                                    {
                                        imageLanguageArray.map((image, index) => (
                                            <TabPanel key={index} value={value} index={index}>
                                                <Images allImages={images} imageType={image} moiveTitle={movie} />
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

export default MovieBackdrops;