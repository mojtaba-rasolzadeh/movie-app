import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActionArea,
    Avatar,
    Divider,
    Chip,
} from "@mui/material";
import { blueGrey, deepOrange, grey, lime, teal } from "@mui/material/colors";
import {
    getDiscoverTvShowWithGenres,
    getGenresTvShowList,
} from "../../services/MovieService";
import TvShowPagination from "../../components/pages/tvShows/TvShowPagination";
import { Loader } from "../../components";

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
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <Typography
                    sx={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        letterSpacing: 2,
                        color: teal[400],
                    }}
                >
                    {genre.name}
                </Typography>
                {tvShows.total_results && (
                    <Chip
                        label={
                            <Typography variant="body1">
                                {tvShows.total_results && tvShows.total_results.toLocaleString()}{" "}
                                shows
                            </Typography>
                        }
                        sx={{ backgroundColor: deepOrange[500] }}
                    />
                )}
            </Box>
            <Divider />
            {loading ? (
                <Loader />
            ) : (
                tvShows.results &&
                tvShows.results.map((tvShow) => (
                    <Card key={tvShow.id} sx={{ display: "flex", my: 3, height: 141 }}>
                        <CardActionArea sx={{ width: 94 }}>
                            <Link
                                to={`/tv/${tvShow.id}`}
                                style={{ textDecoration: "none" }}
                            >
                                <Avatar
                                    variant="square"
                                    sx={{ width: 94, height: 141 }}
                                    src={`https:image.tmdb.org/t/p/w94_and_h141_bestv2${tvShow.poster_path}`}
                                    alt={tvShow.title}
                                />
                            </Link>
                        </CardActionArea>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <CardContent sx={{ flex: "1 0 auto" }}>
                                <Link
                                    to={`/tv/${tvShow.id}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Typography
                                        sx={{
                                            display: "inline",
                                            letterSpacing: 1,
                                            fontSize: "1.20rem",
                                            fontWeight: 700,
                                            color: lime[500],
                                            "&:hover": { color: lime[700] },
                                        }}
                                    >
                                        {tvShow.name}
                                    </Typography>
                                </Link>
                                <Typography
                                    component="p"
                                    variant="caption"
                                    sx={{ color: blueGrey[500], letterSpacing: 1 }}
                                >
                                    {new Date(tvShow.first_air_date).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        letterSpacing: 1,
                                        mt: 1,
                                        color: grey[500],
                                        fontWeight: 300,
                                        display: " -webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                    }}
                                >
                                    {tvShow.overview}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                ))
            )}
            <TvShowPagination fetchData={fetchData} tvShowData={tvShows} />
        </Box>
    );
};
export default TvShowsGenre;
