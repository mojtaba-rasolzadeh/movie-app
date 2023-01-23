import { useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import {
  Avatar,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Pagination,
} from "@mui/material";
import { getSearchPeople } from "../../../../services/MovieService";
import { Loader } from "../../../constant";

const People = ({ peopleData, query }) => {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState({ ...peopleData });
  const [page, setPage] = useState(1);

  const handleChangePage = async (event, value) => {
    setPage(value);
    try {
      setLoading(true);
      const { status, data } = await getSearchPeople(query, value);
      if (status === 200) {
        setLoading(false);
        setPeople(data);
      }
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  return (
    <>
      {_.isEmpty(people.results) ? (
        <Typography sx={{ letterSpacing: 1 }}>
          There are no people that matched your query.
        </Typography>
      ) : (
        <Stack>
          {loading ? (
            <Loader />
          ) : (
            people.results.map((person) => (
              <Card
                key={person.id}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                <CardActionArea
                  sx={{ maxWidth: 90, width: 90, borderRadius: 1 }}
                >
                  <Link
                    to={`/person/${person.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Avatar
                      variant="rounded"
                      sx={{ width: 90, height: 90 }}
                      src={`https://www.themoviedb.org/t/p/w90_and_h90_face${person.profile_path}`}
                    />
                  </Link>
                </CardActionArea>
                <CardContent>
                  <Link
                    to={`/person/${person.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      component="div"
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                    >
                      {person.name}
                    </Typography>
                  </Link>
                  <Typography variant="body2" component="span">
                    Acting:{" "}
                  </Typography>
                  {!_.isEmpty(person.known_for) &&
                    person.known_for.map((item, index) => (
                      <Link
                        key={item.id}
                        to={`${
                          item.media_type === "movie" ? "/movie" : "/tv"
                        }/${item.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          component="span"
                          variant="caption"
                          color="text.secondary"
                        >
                          {`${index ? "," : ""} ${
                            item.media_type === "movie" ? item.title : item.name
                          }`}
                        </Typography>
                      </Link>
                    ))}
                </CardContent>
              </Card>
            ))
          )}
          {people.total_pages > 1 && (
            <Pagination
              count={people.total_pages}
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
export default People;
