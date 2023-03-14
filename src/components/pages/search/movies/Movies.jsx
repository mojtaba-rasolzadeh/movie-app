import { useState } from "react";
import _ from "lodash";
import { Typography } from '@mui/material';

import { getSearchMovies } from "../../../../services/MovieService";
import { Loader } from "../../../constant";
import MovieItem from '../../movie/MovieItem'
import MoviePagination from '../../../pages/movie/MoviePagination';

const Movies = ({ moviesData, query }) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState({ ...moviesData });

  const handleChangePage = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getSearchMovies(query, page);
      if (status === 200) {
        setLoading(false);
        setMovies(data);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      {_.isEmpty(movies.results) ? (
        <Typography sx={{ letterSpacing: 1 }}>
          There are no movies that matched your query.
        </Typography>
      ) : (
        <>
          {loading ? (<Loader />) : (<MovieItem movieData={movies} />)}
          <MoviePagination movieData={movies} fetchData={handleChangePage} />
        </>
      )}
    </>
  );
};
export default Movies;
