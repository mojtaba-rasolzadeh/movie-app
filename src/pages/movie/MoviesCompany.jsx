import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Box, Typography, Chip } from "@mui/material";

import MoviePagination from "../../components/pages/movie/MoviePagination";
import { Loader } from "../../components";
import { getMoviesCompany } from "../../services/MovieService";
import MovieItem from "../../components/pages/movie/MovieItem";

const MoviesCompany = () => {
    const { companyId } = useParams();
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    const fetchData = async (page) => {
        try {
            setLoading(true);
            const { status, data: moviesData } = await getMoviesCompany(
                parseInt(companyId),
                page
            );

            if (status === 200) {
                setLoading(false);
                setMovies(moviesData);
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
        <Box sx={{ py: 4 }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <Typography variant="h5" sx={{ letterSpacing: 1 }}>
                    {companyId?.split(/\d/)
                        .join("").split("-").join(' ')}
                </Typography>
                {movies.total_results && (
                    <Chip
                        label={
                            <Typography variant="body1">
                                {movies.total_results?.toLocaleString()}{" "}
                                movies
                            </Typography>
                        }
                        variant="outlined"
                    />
                )}
            </Box>
            {loading ? (<Loader />) : (
                <>
                    <Helmet>
                        <title>{`Movies produced by ${companyId?.split(/\d/)
                            .join("").split("-").join(' ')} `} Movies | Movie App</title>
                    </Helmet>
                    <MovieItem movieData={movies} />
                </>
            )}
            <MoviePagination fetchData={fetchData} movieData={movies} />
        </Box>
    );
};

export default MoviesCompany;
