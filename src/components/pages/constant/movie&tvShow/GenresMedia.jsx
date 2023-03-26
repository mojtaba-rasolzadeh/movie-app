import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { LocalMoviesRounded } from "@mui/icons-material";

const GenresMedia = ({ genres, mediaType }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      <LocalMoviesRounded />
      {genres?.length <= 0
        ? "-"
        : genres?.map((genre, index) => (
            <Link
              key={genre.id}
              to={`/genre/${genre.id}-${genre.name
                ?.toLowerCase()
                .split(" ")
                .join("-")}/${mediaType}`}
              underline="none"
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  "&:hover": { color: "text.secondary" },
                }}
              >
                {(index ? ", " : "") + genre.name}
              </Typography>
            </Link>
          ))}
    </Box>
  );
};

export default GenresMedia;
