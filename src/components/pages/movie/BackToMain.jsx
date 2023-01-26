import { Link } from "react-router-dom";
import { Avatar, Box, Typography } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";
import { lime } from "@mui/material/colors";

const BackToMain = ({ movie }) => {
  return (
    <Box sx={{ my: 4, display: "flex", gap: 2 }}>
      <Link
        to={`/movie/${movie.id}-${
          movie.title &&
          movie.title
            .split(/[\s:,]/)
            .join("-")
            .split("--")
            .join("-")
            .toLowerCase()
        }`}
        style={{ textDecoration: "none" }}
      >
        <Avatar
          variant="rounded"
          sx={{ width: 58, height: 87 }}
          src={`https://www.themoviedb.org/t/p/w58_and_h87_face${movie.poster_path}`}
        />
      </Link>
      <Box>
        <Link
          to={`/movie/${movie.id}-${
            movie.title &&
            movie.title
              .split(/[\s:,]/)
              .join("-")
              .split("--")
              .join("-")
              .toLowerCase()
          }`}
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="h5"
            sx={{
              letterSpacing: 1,
              fontWeight: "700",
              color: lime[500],
              "&:hover": { color: lime[700] },
            }}
          >
            {movie.title}{" "}
            <Typography
              variant="h6"
              sx={{ display: "inline-block", color: lime[200] }}
            >
              ( {movie.release_date && movie.release_date.substring(0, 4)} )
            </Typography>
          </Typography>
        </Link>
        <Link
          to={`/movie/${movie.id}-${
            movie.title &&
            movie.title
              .split(/[\s:,]/)
              .join("-")
              .split("--")
              .join("-")
              .toLowerCase()
          }`}
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              color: "#fff",
              "&:hover": {
                color: "text.secondary",
              },
            }}
          >
            <KeyboardBackspace />
            Back to main
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default BackToMain;
