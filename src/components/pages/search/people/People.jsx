import { useState } from "react";
import _ from "lodash";
import { Typography } from "@mui/material";

import { getSearchPeople } from "../../../../services/MovieService";
import { Loader } from "../../../constant";
import PeopleItem from '../../people/PeopleItem';
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
          {loading ? (<Loader />) : (<PeopleItem peopleData={people} />)}
          <MoviePagination movieData={people} fetchData={handleChangePage} />
        </>
      )}
    </>
  );
};
export default People;
