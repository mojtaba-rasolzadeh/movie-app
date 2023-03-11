import { Box, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Slider from "react-slick";

import { AuthorAvatar, ReviewContent, ReadAllReviews, AuthorDetails } from './';

const Review = ({ tvShowId, tvShowTitle, reviews }) => {
  const settings = {
    arrows: false,
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <Box>
      <Slider {...settings}>
        {reviews.results?.slice(0, 3).map((review) => (
          <Paper key={review.id} variant="outlined" sx={{ p: 2 }}>
            <Grid key={review.id} container wrap="nowrap" spacing={3}>
              <Grid xs={0} sm={3.4} md={2.2} lg={1.5} xl={1.1}>
                <AuthorAvatar review={review} />
              </Grid>
              <Grid xs={12} sm={8} md={11.1} lg={11.6} xl={11}>
                <AuthorDetails review={review} />
                <ReviewContent review={review} />
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Slider>
      <ReadAllReviews tvShowId={tvShowId} tvShowTitle={tvShowTitle} />
    </Box>
  );
};
export default Review;