import { useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { Avatar, Typography, CardActionArea, Box } from "@mui/material";

import { getSearchPeople } from "../../../../services/MovieService";
import { Loader } from "../../../constant";
import MoviePagination from "../../movie/MoviePagination";

const People = ({ peopleData, query }) => {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState({ ...peopleData });

  const handleChangePage = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getSearchPeople(query, page);
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
        <>
          {loading ? (
            <Loader />
          ) : (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
              {people.results?.map((person) => (
                <CardActionArea sx={{ width: 220, height: 330, borderRadius: '20px' }}>
                  <Link to={`/person/${person.id}`} style={{ textDecoration: "none" }}>
                    <Box key={person.id} sx={{ position: 'relative', width: 220, borderRadius: '20px' }}>
                      <Avatar variant="rounded" sx={{ width: 1, height: 330, borderRadius: '20px' }} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${person.profile_path}`} />
                      <Box sx={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, width: 1, backgroundImage: 'linear-gradient(to top, rgb(32 32 32 / 94%) 60px, rgb(12 11 2 / 0%) 100%)', borderRadius: '17px' }} />
                      <Box sx={{ width: 1, position: 'absolute', bottom: 10, p: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <Box sx={{ maxWidth: 200 }}>
                          <Link to={`/person/${person.id}`} style={{ textDecoration: "none" }}>
                            <Typography
                              variant="body1"
                              sx={{
                                letterSpacing: 1,
                                color: "#fff",
                                "&:hover": { color: "text.secondary" },
                              }}
                              gutterBottom
                            >
                              {person.name}
                            </Typography>
                          </Link>
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{
                              display: '-webkit-box',
                              textOverflow: 'ellipsis',
                              overflow: 'hidden',
                              WebkitLineClamp: 1,
                              WebkitBoxOrient: 'vertical'
                            }}
                          >
                            {` ${person.known_for[0]?.media_type === "tv" ? person.known_for[0]?.name :
                              person.known_for[0]?.title}`}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                </CardActionArea>
              ))
              }
            </Box >
          )}
          <MoviePagination movieData={people} fetchData={handleChangePage} />
        </>
      )}
    </>
  );
};
export default People;
