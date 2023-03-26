import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";

import { getPersonDetails } from "../services/MovieService";
import {
  PersonSocialMedia,
  PersonalInfo,
  Biography,
  Acting,
  PersonAvatar,
} from "../components/pages/people";
import { Loader } from "../components/constant";

const Person = () => {
  const { personId } = useParams();
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { status, data: personData } = await getPersonDetails(
          parseInt(personId)
        );
        if (status === 200) {
          setLoading(false);
          setPerson(personData);
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
      {loading ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>{`${person.name}`} | Movie App</title>
          </Helmet>
          <Grid container mt={3} spacing={4}>
            <Grid xs={12} md={4} lg={3} xl={2}>
              <PersonAvatar {...person} />
            </Grid>
            <Grid xs={12} md={8} lg={9} xl={10}>
              <Biography {...person} />
            </Grid>
          </Grid>
          <Grid container spacing={4} mt={{ xs: 3, md: 2 }}>
            <Grid xs={12} md={4} lg={3} xl={2}>
              <PersonSocialMedia {...person.external_ids} />
              <PersonalInfo {...person} />
            </Grid>
            <Grid xs={12} md={8} lg={9} xl={10}>
              <Acting {...person} />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};
export default Person;
