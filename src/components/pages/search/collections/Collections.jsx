import { useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import {
  Typography,
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Pagination,
  Stack,
} from "@mui/material";
import { getSearchCollections } from "../../../../services/MovieService";
import { Loader } from "../../../constant";

const Collections = ({ collectionsData, query }) => {
  const [loading, setLoading] = useState(false);
  const [collections, setCollections] = useState({ ...collectionsData });
  const [page, setPage] = useState(1);

  const handleChangePage = async (event, value) => {
    setPage(value);
    try {
      setLoading(true);
      const { status, data } = await getSearchCollections(query, value);
      if (status === 200) {
        setLoading(false);
        setCollections(data);
      }
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  return (
    <>
      {_.isEmpty(collections.results) ? (
        <Typography sx={{ letterSpacing: 1 }}>
          There are no collections that matched your query.
        </Typography>
      ) : (
        <Stack>
          {loading ? (
            <Loader />
          ) : (
            collections.results.map((collection) => (
              <Card
                key={collection.id}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                <CardActionArea sx={{ width: 94, borderRadius: 1 }}>
                  <Link
                    to={`/collection/${collection.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Avatar
                      variant="rounded"
                      sx={{ width: 94, height: 141 }}
                      src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2${collection.poster_path}`}
                      alt={collection.name}
                    />
                  </Link>
                </CardActionArea>
                <CardContent>
                  <Link
                    to={`/collection/${collection.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography variant="subtitle1" color="whitesmoke">
                      {collection.name}
                    </Typography>
                  </Link>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: " -webkit-box",
                      WebkitLineClamp: { xs: 1, md: 2 },
                      WebkitBoxOrient: "vertical",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    {collection.overview}
                  </Typography>
                </CardContent>
              </Card>
            ))
          )}
          {collections.total_pages > 1 && (
            <Pagination
              count={collections.total_pages}
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
export default Collections;
