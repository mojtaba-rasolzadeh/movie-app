import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { getPeople } from "../../services/MovieService";
import { Loader } from "../../components";
import PeoplePagination from "../../components/pages/people/PeoplePagination";
import People from "../../components/pages/people/People";

const PopularPeople = () => {
  const [loading, setLoading] = useState(false);
  const [persons, setPersons] = useState([]);
  console.log(persons);
  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getPeople("popular", page);
      if (status === 200) {
        setLoading(false);
        setPersons(data);
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
      {loading ? (
        <Loader />
      ) : (
        <Box sx={{ py: 3.75 }}>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Popular People
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
            }}
          >
            <People personData={persons} />
            <PeoplePagination personData={persons} fetchData={fetchData} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default PopularPeople;
