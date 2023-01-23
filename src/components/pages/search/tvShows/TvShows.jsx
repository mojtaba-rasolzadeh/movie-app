import { useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import {
  Card,
  CardActionArea,
  CardContent,
  Avatar,
  Typography,
  Pagination,
  Stack,
} from "@mui/material";
import { getSearchTvShows } from "../../../../services/MovieService";
import { Loader } from "../../../constant";

const TvShows = ({ tvShowsData, query }) => {
  const [loading, setLoading] = useState(false);
  const [tvShows, setTvShows] = useState({ ...tvShowsData });
  const [page, setPage] = useState(1);

  const handleChangePage = async (event, value) => {
    setPage(value);
    try {
      setLoading(true);
      const { status, data } = await getSearchTvShows(query, value);
      if (status === 200) {
        setLoading(false);
        setTvShows(data);
      }
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  return (
    <>
      {_.isEmpty(tvShows.results) ? (
        <Typography sx={{ letterSpacing: 1 }}>
          There are no TV shows that matched your query.
        </Typography>
      ) : (
        <Stack>
          {loading ? (
            <Loader />
          ) : (
            tvShows.results.map((item) => (
              <Card key={item.id} sx={{ display: "flex", mb: 3 }}>
                <CardActionArea
                  sx={{ maxWidth: 94, width: 94, borderRadius: 1 }}
                >
                  <Link
                    to={`/tv/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Avatar
                      variant="rounded"
                      sx={{ maxWidth: 94, width: 94, height: 141 }}
                      src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2${item.poster_path}`}
                    />
                  </Link>
                </CardActionArea>
                <CardContent>
                  <Link
                    to={`/tv/${item.id}`}
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
                      {item.name}
                    </Typography>
                  </Link>
                  <Typography variant="caption" color="text.secondary">
                    {new Date(item.first_air_date).toLocaleDateString("en-US", {
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
          {tvShows.total_pages > 1 && (
            <Pagination
              count={tvShows.total_pages}
              page={page}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
              sx={{ ".MuiPagination-ul": { justifyContent: "center" } }}
            />
          )}
        </Stack>
      )}
    </>
  );
};
export default TvShows;
