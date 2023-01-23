import { useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import {
  Card,
  CardContent,
  CardActionArea,
  Avatar,
  Typography,
  Pagination,
  Stack,
} from "@mui/material";
import { getSearchMovies } from "../../../../services/MovieService";
import { Loader } from "../../../constant";

const Movies = ({ moviesData, query }) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState({ ...moviesData });
  const [page, setPage] = useState(1);

  const handleChangePage = async (event, value) => {
    setPage(value);
    try {
      setLoading(true);
      const { status, data } = await getSearchMovies(query, value);
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
        <Stack>
          {loading ? (
            <Loader />
          ) : (
            movies.results.map((item) => (
              <Card key={item.id} sx={{ display: "flex", mb: 3 }}>
                <CardActionArea
                  sx={{ maxWidth: 94, width: 94, borderRadius: 1 }}
                >
                  <Link
                    to={`/movie/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Avatar
                      variant="rounded"
                      sx={{ maxWidth: 94, width: 94, height: 141 }}
                      src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2${item.poster_path}`}
                      alt={item.title}
                    />
                  </Link>
                </CardActionArea>
                <CardContent>
                  <Link
                    to={`/movie/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="subtitle1"
                      color="whitesmoke"
                      sx={{
                        display: " -webkit-box",
                        WebkitLineClamp: { xs: 1, md: 2 },
                        WebkitBoxOrient: "vertical",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                  <Typography variant="caption" color="text.secondary">
                    {new Date(item.release_date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      display: " -webkit-box",
                      WebkitLineClamp: { xs: 1, md: 2 },
                      WebkitBoxOrient: "vertical",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    {item.overview}
                  </Typography>
                </CardContent>
              </Card>
            ))
          )}
          {movies.total_pages > 1 && (
            <Pagination
              count={movies.total_pages}
              page={page}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
              sx={{
                ".MuiPagination-ul": {
                  justifyContent: "center",
                },
              }}
            />
          )}
        </Stack>
      )}
    </>
  );
};
export default Movies;
