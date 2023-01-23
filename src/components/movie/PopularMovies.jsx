import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CardActionArea,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import { purple } from "@mui/material/colors";

import { MoreButton } from "./";
import UserScore from "../constant/UserScore";

const PopularMovies = ({
  id,
  name,
  poster_path,
  title,
  release_date,
  vote_average,
}) => {
  let options = { year: "numeric", month: "short", day: "numeric" };

  const releaseDate = new Date(
    release_date.split("-").join(" ")
  ).toLocaleDateString("en-US", options);

  return (
    <>
      <Helmet>
        <title>Movie App | Popular</title>
      </Helmet>
      <Grid
        xs={12}
        sm={6}
        md={4}
        lg={4}
        xl={4}
        sx={{ maxWidth: 240, margin: { xs: "0 auto", md: "0" } }}
      >
        <Card
          sx={{
            maxWidth: 240,
            height: "100%",
            position: "relative",
          }}
        >
          <MoreButton />
          <CardActionArea>
            <Link to={`/movie/${id}`} >
              <CardMedia
                component="img"
                height="360"
                image={`https://image.tmdb.org/t/p/w400${poster_path}`}
                alt={title}
              />
            </Link>
          </CardActionArea>
          <Box
            sx={{
              display: "inline-block",
              position: "relative",
              top: "-1.2rem",
              mx: 1,
            }}
          >
            <UserScore vote_average={vote_average} size={45} sx={{ mx: 1 }} />
          </Box>
          <CardContent sx={{ mt: -3 }}>
            <Link to={`/movie/${id}`} style={{ textDecoration: "none" }}>
              <Typography
                gutterBottom
                varaint="h5"
                sx={{
                  display: "inline-block",
                  letterSpacing: 1,
                  fontWeight: "700",
                  color: "#fff",
                  "&:hover": { color: purple[600] },
                }}
              >
                {title}
              </Typography>
            </Link>
            <Typography variant="body2" fontWeight="200" color="text.secondary">
              {releaseDate}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
export default PopularMovies;
