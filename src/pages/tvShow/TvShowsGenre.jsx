import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Box, Typography, Divider, Chip, } from "@mui/material";

import { getDiscoverTvShowWithGenres, getGenresTvShowList } from "../../services/MovieService";
import TvShowPagination from "../../components/pages/tvShows/TvShowPagination";
import { Loader } from "../../components";
import TvShowItem from "../../components/pages/tvShows/TvShowItem";

const TvShowsGenre = () => {
    const { genreId } = useParams();
    const [loading, setLoading] = useState(false);
    const [genre, setGenre] = useState([]);
    const [tvShows, setTvShows] = useState([]);

    const fetchData = async (page) => {
        try {
            setLoading(true);
            const { status, data } = await getDiscoverTvShowWithGenres(
                parseInt(genreId),
                page
            );
            const { data: genresData } = await getGenresTvShowList();
            if (status === 200) {
                setLoading(false);
                setTvShows(data);
                setGenre(
                    genresData.genres.find((genre) => genre.id === parseInt(genreId))
                );
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
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                <Typography
                    sx={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        letterSpacing: 2,
                        background: 'linear-gradient(to right,#ED4700,#E76F00)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    {genre.name}
                </Typography>
                {tvShows.total_results && (
                    <Chip
                        label={
                            <Typography variant="body1">
                                {tvShows.total_results?.toLocaleString()}{" "}
                                shows
                            </Typography>
                        }
                        sx={{ background: 'linear-gradient(to right,#ED4700,#E76F00)' }}
                    />
                )}
            </Box>
            <Divider />
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Helmet>
                        <title>{`${genre.name}`} Tv Shows | Movie App</title>
                    </Helmet>
                    <TvShowItem tvShowData={tvShows} />
                </>
            )}
            <TvShowPagination fetchData={fetchData} tvShowData={tvShows} />
        </Box>
    );
};
export default TvShowsGenre;
