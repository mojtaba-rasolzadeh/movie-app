import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Paper, Typography, Avatar, Chip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

// import { Loader } from "../../components";
import { getMovie } from "../services/MovieService";
import BackToMain from "../components/pages/movie/BackToMain";
import { amber, deepOrange, lime, yellow } from "@mui/material/colors";
import { StarRateRounded } from "@mui/icons-material";
import MoviePagination from "../components/pages/movie/MoviePagination";
import { Loader } from "../components";

const Reviews = () => {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState([]);

    movie.reviews && movie.reviews.results.map((item) => {
        console.log(
            item.content.includes('\n')
        )
        // item.content.split("\n").map((text,index) => {
        //     console.log(text);
        // })
    })

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
        <Box>
            {
                loading ? <Loader /> :
                    <>
                        <BackToMain movie={movie} />
                        {movie.reviews &&
                            movie.reviews.results.map((review) => (
                                <Paper key={review.id} variant="outlined" sx={{ p: 2, mb: 5 }}>
                                    <Grid key={review.id} container wrap="nowrap" spacing={3}>
                                        <Grid xs={0} sm={3.4} md={2.2} lg={1.5} xl={1.1}>
                                            <Avatar
                                                src={`https://image.tmdb.org/t/p/w64_and_h64_face/${review.author_details && review.author_details.avatar_path
                                                    }`}
                                                alt={review.author}
                                                sx={{
                                                    display: { xs: "none", sm: "inline-flex" },
                                                    width: 64,
                                                    height: 64,
                                                    bgcolor: deepOrange[500],
                                                    color: "#fff",
                                                }}
                                            />
                                        </Grid>
                                        <Grid xs={12} sm={8} md={11.1} lg={11.6} xl={11}>
                                            <Box>
                                                <Box
                                                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                                                >
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            flexWrap: "wrap",
                                                            gap: 2,
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Link
                                                            to={`/review/${review.id}`}
                                                            style={{ textDecoration: "none" }}
                                                        >
                                                            <Typography
                                                                variant="h6"
                                                                sx={{
                                                                    color: yellow[500],
                                                                    fontWeight: "600",
                                                                    letterSpacing: 1,
                                                                    "&:hover": { color: yellow[700] },
                                                                }}
                                                            >
                                                                A review by {review.author}
                                                            </Typography>
                                                        </Link>
                                                        {review.author_details &&
                                                            review.author_details.rating !== null && (
                                                                <Chip
                                                                    icon={<StarRateRounded fontSize="small" />}
                                                                    label={`${review.author_details.rating}.0`}
                                                                    size="small"
                                                                    color="error"
                                                                    sx={{ gap: "0.25rem", padding: ".9rem .4rem" }}
                                                                />
                                                            )}
                                                    </Box>
                                                    <Typography
                                                        variant="body2"
                                                        component="p"
                                                        sx={{ fontWeight: "200" }}
                                                    >
                                                        Written by{" "}
                                                        <Link
                                                            to={`/u/${review.author_details &&
                                                                review.author_details.username.split(" ").join("+")
                                                                }`}
                                                            style={{ textDecoration: "none" }}
                                                        >
                                                            <Typography
                                                                variant="caption"
                                                                component="strong"
                                                                sx={{
                                                                    color: amber[400],
                                                                    fontWeight: "700",
                                                                    "&:hover": { color: amber[700] },
                                                                }}
                                                            >
                                                                {review.author}
                                                            </Typography>
                                                        </Link>{" "}
                                                        on{" "}
                                                        {new Date(review.created_at).toLocaleDateString(
                                                            "en-US",
                                                            { month: "long", day: "numeric", year: "numeric" }
                                                        )}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ mt: 5 }}>
                                                    {
                                                        review.content && review.content.split('\n').join("")
                                                    }
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            ))}
                    </>
            }
            {/* <MoviePagination fetchData={fetchData} movieData={movie.reviews} /> */}
        </Box>
    );
}

export default Reviews;

// {
//     review.content && review.content.split('\n').map((content, index) => (
//         content.length <= 594 ? (
//             <Typography variant="body1" sx={{ fontWeight: "300" }}>
//                 {content}
//             </Typography>
//         ) : (
//             <Typography variant="body1" sx={{ fontWeight: "300" }}>
//                 {review.content && review.content.slice(0, 601)}...{" "}
//                 <Link
//                     to={`/review/${review.id}`}
//                     style={{ textDecorationColor: lime[500] }}
//                 >
//                     <Typography
//                         sx={{
//                             display: "inline-block",
//                             color: lime[500],
//                             "&:hover": { color: lime[700] },
//                         }}
//                     >
//                         {" "}
//                         read the rest.
//                     </Typography>
//                 </Link>
//             </Typography>

