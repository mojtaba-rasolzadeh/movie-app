import { Link } from "react-router-dom";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Box,
  Typography,
  Button,
} from "@mui/material";
import {
  AccessTimeFilledRounded,
  LocalMoviesRounded,
  EventAvailableRounded,
  PlayArrowRounded,
} from "@mui/icons-material";
import { pink, lime, grey, orange, amber, yellow } from "@mui/material/colors";

import UserScore from "../constant/UserScore";
import { toHoursAndMinutes } from "../../utils/toHoursAndMinutes";
import { FactorsOfProduction } from "./";
import _ from "lodash";

const MovieSpecifications = ({
  id,
  backdrop_path,
  poster_path,
  title,
  original_title,
  release_date,
  genres,
  runtime,
  vote_average,
  tagline,
  overview,
  credits,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        maxHeight: 570,
        // height: 510,
        mt: 5,
        padding: { xs: "0", md: "30px 40px" },
        position: "relative",
        backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path})`,
        backgroundPosition: "right -200px top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: {
            xs: "linear-gradient(to right, rgba(31.5, 31.5, 31.5, 0.84) 150px, rgba(31.5, 31.5, 31.5, 0.84) 100%)",
            md: "linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) 150px, rgba(31.5, 31.5, 31.5, 0.84) 100%)",
          },
        }}
      />

      <CardActionArea
        sx={{
          display: { xs: "none", md: "inline-block" },
          width: 300,
          height: 450,
          borderRadius: 1,
        }}
      >
        <Link href="#" underline="none">
          <Avatar
            variant="rounded"
            sx={{ width: 300, height: 450 }}
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}
            alt={title}
          />
        </Link>
      </CardActionArea>
      <CardContent sx={{ pl: { md: 5 }, zIndex: 10 }}>
        <Box>
          <Link
            to={`/movie/${id}-${original_title
              .split(/[\s:,]/)
              .join("-")
              .split("--")
              .join("-")
              .toLowerCase()}`}
            style={{ textDecoration: "none" }}
          >
            <Typography
              variant="h4"
              sx={{
                display: "inline",
                fontWeight: 700,
                color: lime[500],
                "&:hover": { color: lime[700] },
              }}
            >
              {title}{" "}
              <Typography
                variant="h4"
                component="span"
                sx={{ fontWeight: "400", color: lime[200] }}
                color="text.secondary"
              >
                {`(${release_date.slice(0, 4)})`}
              </Typography>
            </Typography>
          </Link>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 0.75,
              mt: 1,
            }}
          >
            <EventAvailableRounded color="secondary" />
            <Typography variant="subtitle2" color="text.secondary">
              {release_date}
            </Typography>
            {!_.isEmpty(genres) && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <LocalMoviesRounded sx={{ color: pink[500] }} />
                {genres.map((genre, index) => (
                  <Link
                    key={genre.id}
                    to={`/genre/${genre.id}-${genre.name
                      .toLowerCase()
                      .split(" ")
                      .join("-")}/movie`}
                    underline="none"
                    style={{textDecoration:'none'}}
                  >
                    <Typography sx={{
                      color: "#fff",
                      "&:hover": { color: "text.secondary" },
                    }}>

                    {(index ? "," : "") + genre.name}
                    </Typography>
                  </Link>
                ))}
              </Box>
            )}
            {runtime > 0 && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <AccessTimeFilledRounded color="error" />
                <Typography variant="subtitle2" color="text.secondary">
                  {toHoursAndMinutes(runtime)}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 4, my: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                display: "inline-block",
                cursor: "pointer",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <UserScore vote_average={vote_average} size={60} />
            </Box>
            <Typography
              variant="body1"
              component="div"
              sx={{ fontWeight: "700", color: yellow[300] }}
            >
              User <br /> Score
            </Typography>
          </Box>
          <Button
            variant="text"
            startIcon={<PlayArrowRounded />}
            sx={{ color: "#fff" }}
          >
            Play Trailer
          </Button>
        </Box>
        <Box>
          <Typography variant="body1" color="text.secondary">
            {tagline}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "700", my: 1, color: amber[500] }}
          >
            Overview
          </Typography>
          {overview.length === 0 ? (
            <>
              <Typography variant="body2" sx={{ color: orange[50] }}>
                We don't have an overview translated in English. Help us expand
                our database by adding one.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, color: orange[50] }}>
                We don't have any crew added to this movie. You can help by
                adding some!
              </Typography>
            </>
          ) : (
            <Typography variant="subtitle2" sx={{ mb: 1, color: amber[100] }}>
              {overview}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
export default MovieSpecifications;
