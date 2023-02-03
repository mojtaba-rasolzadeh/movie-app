import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Avatar, Box, Typography } from '@mui/material';

import { getDetailsOfMovieOrTvShowReview } from '../services/MovieService';
import { deepOrange, grey, lime } from '@mui/material/colors';
import { Loader } from '../components';

const Review = () => {
    const { reviewId } = useParams();
    const [loading, setLoading] = useState(false);
    const [review, setReview] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { status, data } = await getDetailsOfMovieOrTvShowReview(reviewId);
                if (status === 200) {
                    setLoading(false);
                    setReview(data);
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
                loading ? <Loader /> : <Box sx={{ my: 6 }}>
                    <Link
                        to={`/${review.media_type === 'movie' ? "movie":"tv"}/${review.media_id}`}
                        style={{ textDecoration: "none" }}
                    >
                        <Typography
                            variant='h4'
                            sx={{
                                display: "inline",
                                letterSpacing: 1,
                                fontWeight: 700,
                                color: lime[500],
                                "&:hover": { color: lime[700] },
                            }}
                        >
                            {review.media_title}
                        </Typography>
                    </Link>
                    <Box sx={{ display: 'flex', gap: 3, py: 5 }}>
                        <Box>
                            <Avatar variant="circular" sx={{
                                width: 64,
                                height: 64,
                                bgcolor: deepOrange[500],
                                color: "#fff",
                            }} src={`https://www.themoviedb.org/t/p/w64_and_h64_face${review.author_details && review.author_details.avatar_path
                                }`} alt={review.author_details && review.author_details.username} />
                        </Box>
                        <Box>
                            <Typography
                                component="p"
                                variant="body1"
                                sx={{ letterSpacing: 1 }}
                            >Written by
                                <Typography variant="caption"
                                    style={{ textDecoration: "none", color: lime[500] }}
                                >
                                    {" "}{review.author_details && review.author_details.name ? review.author_details.name : review.author_details && review.author_details.username}{" "}

                                </Typography>
                                on {new Date(review.created_at
                                ).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </Typography>
                            {review.content && review.content.split('\n').map((content, index) => (
                                <Typography
                                    key={index}
                                    variant="body1"
                                    sx={{
                                        letterSpacing: 1,
                                        mt: 1,
                                        fontWeight: 300,
                                        color: grey[500]
                                    }}
                                >
                                    {content}
                                </Typography>
                            ))
                            }
                        </Box>
                    </Box>
                </Box>
            }
        </>
    );
}

export default Review;