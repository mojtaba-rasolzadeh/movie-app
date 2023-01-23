import { Link } from "react-router-dom";
import { Box, Paper, Avatar, Chip, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { deepOrange, amber, yellow, lime } from "@mui/material/colors";
import { StarRateRounded } from "@mui/icons-material";

const RandomReview = ({ review }) => {
  // console.log(review);
  const { id, author, author_details, content, created_at, updated_at, url } =
    review;

  const viewCreated = new Date(created_at).toLocaleDateString("en-Us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Box>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid xs={0} sm={2.5} md={2} lg={1.5}>
            <Avatar
              src={`https://image.tmdb.org/t/p/w400/${author_details.avatar_path}`}
              alt={author}
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                width: 64,
                height: 64,
                bgcolor: deepOrange[500],
                color: "#fff",
              }}
            />
          </Grid>
          <Grid xs={12} sm={8.5} md={10} lg={10.5}>
            <Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    alignItems: "center",
                  }}
                >
                  <Link to={url} style={{ textDecoration: "none" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: yellow[500],
                        fontWeight: "600",
                        letterSpacing: 1,
                        "&:hover": { color: yellow[700] },
                      }}
                    >
                      A review by {author}
                    </Typography>
                  </Link>
                  {author_details.rating !== null && (
                    <Chip
                      icon={<StarRateRounded fontSize="small" />}
                      label={`${author_details.rating}.0`}
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
                    to={`u/${author_details.username.split(" ").join("+")}`}
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
                      {author}
                    </Typography>
                  </Link>{" "}
                  on {viewCreated}
                </Typography>
              </Box>
              <Box sx={{ mt: 5 }}>
                {content.length <= 594 ? (
                  <Typography variant="body1" sx={{ fontWeight: "300" }}>
                    {content}
                  </Typography>
                ) : (
                  <Typography variant="body1" sx={{ fontWeight: "300" }}>
                    {content.slice(0, 601)}...{" "}
                    <Link to={url} style={{textDecorationColor:lime[500]}}>
                      <Typography
                        sx={{
                          color: lime[500],
                          "&:hover": { color: lime[700] },
                        }}
                      >
                        {" "}
                        read the rest.
                      </Typography>
                    </Link>
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Link to="#" style={{ textDecoration: "none" }}>
        <Typography
          sx={{
            display: "inline-block",
            color: yellow[700],
            "&:hover": { color: yellow[600] },
            fontWeight: "700",
            mt: 3,
          }}
        >
          Read All Reviews
        </Typography>
      </Link>
    </Box>
  );
};
export default RandomReview;
