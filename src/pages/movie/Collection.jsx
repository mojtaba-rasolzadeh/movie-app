import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { getMoviesCollection } from "../../services/MovieService";
import { Loader } from "../../components";
import DarkCover from "../../components/constant/DarkCover";
import {
    CollectionPoster,
    CollectionDetails,
    CollectionMoviesLength,
    MoviesCollection
} from '../../components/pages/collection';

const Collection = () => {
    const { collectionId } = useParams();
    const [loading, setLoading] = useState(false);
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { status, data } = await getMoviesCollection(parseInt(collectionId));

                if (status === 200) {
                    setLoading(false);
                    setCollection(data);
                }
            } catch (err) {
                setLoading(false);
                console.log(err.message);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            {
                loading ? <Loader /> :
                    <>
                        <Helmet>
                            <title>{`${collectionId?.split(/\d/)
                                .join("").split("-").join(' ')}`} | Movie App</title>
                        </Helmet>
                        <Box
                            sx={{
                                position: "relative",
                                display: "flex",
                                width: 1,
                                height: { xs: 0, sm: 510 },
                                backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${collection.backdrop_path})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                borderBottomLeftRadius: '20px',
                                borderBottomRightRadius: '20px',
                            }}
                        >
                            <DarkCover />
                            <Box sx={{
                                width: 1,
                                position: 'absolute!important',
                                top: { xs: 0, sm: '16rem' },
                                padding: { xs: '0', sm: '0 2rem' }
                            }}>
                                <Grid container spacing={{ xs: 0, sm: 3 }}>
                                    <Grid xs={12} md={5} lg={3.3} xl={2.5} xxl={1}>
                                        <CollectionPoster {...collection} />
                                    </Grid>
                                    <Grid xs={12} md={7} lg={8.7} xl={9.5} xxl={11} >
                                        <CollectionDetails {...collection} />
                                    </Grid>
                                </Grid>
                                <CollectionMoviesLength {...collection} />
                                <MoviesCollection movies={collection?.parts} />
                            </Box>
                        </Box>
                    </>
            }
        </>
    );
}

export default Collection;