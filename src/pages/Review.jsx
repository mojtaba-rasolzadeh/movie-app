import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { getDetailsOfMovieOrTvShowReview } from '../services/MovieService';
import { Loader } from '../components';
import { BackToMedia, ReviewTitle, ReviewContent, AuthorAvatar } from '../components/pages/review';

const Review = () => {
    const { reviewId } = useParams();
    const [loading, setLoading] = useState(false);
    const [review, setReview] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { status, data: reviewData } = await getDetailsOfMovieOrTvShowReview(reviewId);
                if (status === 200) {
                    setLoading(false);
                    setReview(reviewData);
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
                loading ? (<Loader />) :
                    (<Box sx={{ my: 6 }}>
                        <BackToMedia review={review} />
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, py: 5 }}>
                            <AuthorAvatar review={review} />
                            <Box>
                                <ReviewTitle review={review} />
                                <ReviewContent review={review} />
                            </Box>
                        </Box>
                    </Box>)
            }
        </>
    );
}

export default Review;