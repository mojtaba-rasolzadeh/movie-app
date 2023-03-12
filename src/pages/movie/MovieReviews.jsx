import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Box, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { getMovie } from "../../services/MovieService";
import BackToMain from "../../components/constant/BackToMain";
import MoviePagination from "../../components/pages/movie/MoviePagination";
import { Loader } from "../../components";
import { AuthorAvatar, AuthorDetails, ReviewContent } from "../../components/pages/movie/social";

const MovieReviews = () => {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState([]);

    const fetchData = async (page) => {
        try {
            setLoading(true);
            const { status, data } = await getMovie(parseInt(movieId), page);
            if (status === 200) {
                setLoading(false);
                setMovie(data);
            }
        } catch (err) {
            setLoading(false);
            console.log(err.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Box sx={{ py: 5 }}>
                <BackToMain media_data={movie} media_type="movie" />
                {loading ? <Loader /> :
                    <>
                        <Helmet>
                            <title>{`${movie.title} (${movie.release_date?.slice(0, 4)}) - Reviews`} | Movie App</title>
                        </Helmet>
                        {
                            movie.reviews?.results.map((review) => (
                                <Paper key={review.id} variant="outlined" sx={{ p: 4, my: 5 }}>
                                    <Grid key={review.id} container wrap="nowrap" spacing={3}>
                                        <Grid xs={0} sm={2.5} md={1.6} lg={1.1} xl={.8}>
                                            <AuthorAvatar review={review} />
                                        </Grid>
                                        <Grid xs={12} sm={8} md={11.1} lg={11.6} xl={11}>
                                            <Box>
                                                <AuthorDetails review={review} />
                                                <ReviewContent review={review} />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            ))}
                    </>
                }
            </Box>
            <MoviePagination movieData={movie.reviews} fetchData={fetchData} />
        </>
    );
}

export default MovieReviews;