import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Avatar,
  Divider,
  Chip,
} from "@mui/material";
import { blueGrey, deepOrange, grey, lime, teal } from "@mui/material/colors";
import {
  getDiscoverMovieWithGenres,
  getGenresMovieList,
} from "../../services/MovieService";
import MoviePagination from "../../components/pages/movie/MoviePagination";
import { Loader } from "../../components";

const MoviesGenre = ({ id, poster_path, title, release_date, overview }) => {
  const { genreId } = useParams();
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState([]);
  const [movies, setMovies] = useState([]);

  console.log(parseInt(genreId));
  console.log(genre);
  console.log(movies);

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getDiscoverMovieWithGenres(
        parseInt(genreId),
        page
      );
      const { data: genresData } = await getGenresMovieList();
      if (status === 200) {
        setLoading(false);
        setMovies(data);
        setGenre(
          genresData.genres.find((genre) => genre.id === parseInt(genreId))
        );
      }
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ py: 4 }}>
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
        {movies.total_results && (
          <Chip
            label={
              <Typography variant="body1">
                {movies.total_results && movies.total_results.toLocaleString()}{" "}
                movies
              </Typography>
            }
            sx={{ backgroundColor: deepOrange[500] }}
          />
        )}
      </Box>
      <Divider />
      {loading ? (
        <Loader />
      ) : (
        movies.results &&
        movies.results.map((movie) => (
          <Card key={movie.id} sx={{ display: "flex", my: 3, height: 141 }}>
            <CardActionArea sx={{ width: 94 }}>
              <Link
                to={`/movie/${movie.id}`}
                style={{ textDecoration: "none" }}
              >
                <Avatar
                  variant="square"
                  sx={{ width: 94, height: 141 }}
                  src={`https:image.tmdb.org/t/p/w94_and_h141_bestv2${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
            </CardActionArea>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Link
                  to={`/movie/${movie.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      display: "inline",
                      letterSpacing: 1,
                      fontSize: "1.20rem",
                      fontWeight: 700,
                      color: lime[500],
                      "&:hover": { color: lime[700] },
                    }}
                  >
                    {movie.title}
                  </Typography>
                </Link>
                <Typography
                  component="p"
                  variant="caption"
                  sx={{ color: blueGrey[500], letterSpacing: 1 }}
                >
                  {new Date(movie.release_date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    letterSpacing: 1,
                    mt: 1,
                    color: grey[500],
                    fontWeight: 300,
                    display: " -webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {movie.overview}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        ))
      )}
      <MoviePagination fetchData={fetchData} movieData={movies} />
    </Box>
  );
};
export default MoviesGenre;
