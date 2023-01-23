import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import { UserScore } from "../../constant";

const Movie = ({ movieData }) => {
  return (
    <>
      {movieData.results !== undefined &&
        movieData.results.map((movie) => (
          <Card key={movie.id} sx={{ maxWidth: 175 }}>
            <CardActionArea sx={{ maxWidth: 175, borderRadius: 1 }}>
              <Link
                to={`/movie/${movie.id}`}
                style={{ textDecoration: "none" }}
              >
                <Avatar
                  variant="rounded"
                  sx={{ width: 175, height: 262 }}
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                />
              </Link>
            </CardActionArea>
            <Box
              sx={{
                display: "inline-block",
                position: "relative",
                top: "-20px",
                left: "10px",
              }}
            >
              <UserScore
                vote_average={movie.vote_average}
                size={34}
                fSize={12}
              />
            </Box>
            <CardContent sx={{ position: "relative", top: "-26px" }}>
              <Link
                to={`/movie/${movie.id}`}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    display: "inline-block",
                    color: "#fff",
                    "&:hover": { color: "text.secondary" },
                  }}
                  gutterBottom
                >
                  {movie.title}
                </Typography>
              </Link>
              <Typography
                component="div"
                variant="caption"
                color="text.secondary"
              >
                {new Date(movie.release_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </>
  );
};
export default Movie;
