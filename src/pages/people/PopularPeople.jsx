import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Box, Typography } from "@mui/material";

import { getPeople } from "../../services/MovieService";
import { Loader } from "../../components";
import PeopleItem from "../../components/pages/people/PeopleItem";
import MoviePagination from "../../components/pages/movie/MoviePagination";

const PopularPeople = () => {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState([]);

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getPeople("popular", page);
      if (status === 200) {
        setLoading(false);
        setPeople(data);
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
    <>
      <Helmet>
        <title>Popular People | Movie App</title>
      </Helmet>
      <Box sx={{ py: 3.75 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Popular People
        </Typography>
        {loading ? (<Loader />) : (
          <PeopleItem peopleData={people} />
        )}
        <MoviePagination movieData={people} fetchData={fetchData} />
      </Box>
    </>
  );
};

export default PopularPeople;
