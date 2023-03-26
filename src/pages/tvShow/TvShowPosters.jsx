import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { getLanguagesList, getTv } from '../../services/MovieService';
import BackToMain from '../../components/constant/BackToMain';
import { Loader } from '../../components';
import TabPanel from '../../components/constant/TabPanel';
import PostersPanel from '../../components/pages/constant/posters/PostersPanel';
import Images from '../../components/pages/constant/posters/Images';

const TvShowPosters = () => {
    const { tvId } = useParams();
    const [loading, setLoading] = useState(false);
    const [tvShow, setTvShow] = useState({});
    const [images, setImages] = useState([]);
    const [languagesList, setLanguagesList] = useState([]);
    const [imageLanguage] = useState(new Set());
    const imageLanguageArray = [...imageLanguage];
    const [value, setValue] = useState(0);

    if (images) images.map((image) => imageLanguage.add(image.iso_639_1))

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const displayLengthItem = (item) => {
        return images.filter(image => image.iso_639_1 === item)?.length;
    };

    const displayLanguage = (imageLanguage) => {
        if (typeof imageLanguage !== 'string') {
            return 'No Language';
        } else {
            return languagesList.find(item => item.iso_639_1 === imageLanguage)?.english_name;
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { status, data } = await getTv(parseInt(tvId));
                const { data: languageData } = await getLanguagesList();
                if (status === 200) {
                    setLoading(false);
                    setTvShow(data);
                    setImages(data.images.posters);
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
                            <title>{`${tvShow.name} (TV Series ${tvShow.first_air_date?.slice(0, 4)}) - Posters`} | Movie App</title>
                        </Helmet>
                        <Box sx={{ py: 5 }}>
                            <BackToMain media_data={tvShow} media_type="tv" searchParams={tvId} />
                            <Grid container spacing={{ xs: 3, sm: 2 }} sx={{ width: "100%", my: 5 }}>
                                <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
                                    <PostersPanel
                                        value={value}
                                        images={images}
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
                                                <Images allImages={images} imageType={image} mediaTitle={tvShow.name} />
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

export default TvShowPosters;