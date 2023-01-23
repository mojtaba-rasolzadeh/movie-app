import { useEffect, useState } from "react";
import { Box, Typography, Chip } from "@mui/material";
import { teal, deepOrange } from "@mui/material/colors";

import { getGenresMovieList } from "../../../../services/MovieService";

const GenreTitle = ({ genreId ,movies}) => {
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    const fetchGenresListData = async () => {
      try {
        const { status, data: genresData } = await getGenresMovieList();
        if (status === 200) {
          setGenre(
            genresData.genres.find((genre) => genre.id === parseInt(genreId))
          );
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchGenresListData();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 3,
      }}
    >
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: 700,
          letterSpacing: 2,
          color: teal[400],
          "&:hover": {
            color: teal[500],
          },
        }}
      >
        {genre.name}
      </Typography>
      <Chip
        label={
          <Typography variant="body1">
            {movies.total_results && movies.total_results.toLocaleString()}{" "}
            movies
          </Typography>
        }
        sx={{ backgroundColor: deepOrange[500] }}
      />
    </Box>
  );
};

export default GenreTitle;
