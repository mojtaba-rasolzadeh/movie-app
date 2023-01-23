import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import _ from "lodash";
import { Helmet } from "react-helmet-async";
import { Box, Typography, Chip, Divider } from "@mui/material";
import { teal } from "@mui/material/colors";

import {
  getGenresMovieList,
  getDiscoverMovieWithGenres,
  getDiscoverTvWithGenres,
} from "../../../services/MovieService";
import Loader from "../../constant/Loader";
import { GenreMedia, GenreTitle, MovieGenre, TvGenres } from "./";

const Genres = () => {
  const { genreId } = useParams();

  const [loading, setLoading] = useState(false);
  const [genresList, setGenresList] = useState({});
  const [movies, setMovies] = useState({});
  const [tv, setTv] = useState({});
  const [genreType, setGenreType] = useState("Movies");

  let genre =
    !_.isEmpty(genresList) &&
    genresList.find((genreItem) => genreItem.id === parseInt(genreId));

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { status, data: genresData } = await getGenresMovieList();
        const { data: moviesData } = await getDiscoverMovieWithGenres(
          parseInt(genreId)
        );
        const { data: tvData } = await getDiscoverTvWithGenres(
          parseInt(genreId)
        );
        if (status === 200) {
          setLoading(false);
          setGenresList(genresData.genres);
          setMovies(moviesData);
          setTv(tvData);
        }
      } catch (err) {
        setLoading(false);
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {_.isEmpty(genre) ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>{`${genre.name}`} Movies - Movie App</title>
          </Helmet>
          <Box>
            <GenreTitle
              genre={genre}
              movies={movies}
              tv={tv}
              genreType={genreType}
              setGenreType={setGenreType}
            />
            <Divider />
            {genreType === "Movies" ? (
              movies.results.map((movie) => (
                <MovieGenre key={movie.id} {...movie} />
              ))
            ) : _.isEmpty(tv.results) ? (
              <Typography sx={{ my: 3 }}>No TV shows found.</Typography>
            ) : (
              tv.results.map((tv) => <TvGenres key={tv.id} {...tv} />)
            )}
          </Box>
        </>
      )}
    </>
  );
};
export default Genres;
