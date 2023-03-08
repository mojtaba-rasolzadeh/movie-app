import { Link } from "react-router-dom";
import { Box, Paper, Avatar, Chip, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { deepOrange, amber, yellow, lime } from "@mui/material/colors";
import { StarRateRounded } from "@mui/icons-material";
import Slider from "react-slick";

const Review = ({ movieId, movieTitle, reviews }) => {
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
                <Avatar
                  src={`https://image.tmdb.org/t/p/w64_and_h64_face/${review?.author_details.avatar_path}`}
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
                      {review.author_details?.rating !== null && (
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
                      <Typography
                        variant="caption"
                        component="strong"
                        sx={{
                          color: amber[400],
                          fontWeight: "700",
                        }}
                      >
                        {review.author}
                      </Typography>
                      {" "}
                      on{" "}
                      {new Date(review.created_at).toLocaleDateString(
                        "en-US",
                        { month: "long", day: "numeric", year: "numeric" }
                      )}
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    <Typography variant="body1" sx={{ fontWeight: "300" }}>
                      {review.content.slice(0, 287)}
                      {review.content.length > 287 &&
                        <Link
                          to={`/review/${review.id}`}
                          style={{ textDecorationColor: lime[500] }}
                        >
                          <Typography
                            sx={{
                              display: "inline-block",
                              color: lime[500],
                              "&:hover": { color: lime[700] },
                            }}
                          >
                            ...{" "}
                            read the rest.
                          </Typography>
                        </Link>}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Slider>
      <Link to={`/movie/${movieId}-${movieTitle?.split(/[\s:,]/).join("-").split("--").join("-").toLowerCase()}/reviews`} style={{ textDecoration: "none" }}>
        <Typography
          sx={{
            display: "inline-block",
            color: '#fff',
            "&:hover": { color:'text.secondary' },
            fontWeight: "700",
            mt: 6.25,
          }}
        >
          Read All Reviews
        </Typography>
      </Link>
    </Box>
  );
};
export default Review;
