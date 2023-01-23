import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import _ from "lodash";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Avatar } from "@mui/material";

import { getPersonDetails } from "../../../../services/MovieService";
import Loader from "../../../constant/Loader";
import {
  SocialLinks,
  PersonalInfo,
  Biography,
  KnownForMovies,
  Acting,
} from "./";

const Person = () => {
  const { personId } = useParams();

  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(false);

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

  const { profile_path, external_ids } = person;

  return (
    <>
      {_.isEmpty(person) || loading ? (
        <Loader />
      ) : (
        <Grid container sx={{ my: 5 }}>
          <Grid xs={12} sm={6.4} md={4.2} lg={3.1} xl={2.35}>
            <Box>
              <Avatar
                variant="rounded"
                sx={{ width: 300, height: 450 }}
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${profile_path}`}
              />
              <SocialLinks {...external_ids} />
              <PersonalInfo {...person} />
            </Box>
          </Grid>
          <Grid xs={12} sm={5.6} md={7.8} lg={8.9} xl={9.65}>
            <Box sx={{ pl: { xs: 0, sm: 4 } }}>
              <Biography {...person} />
              <KnownForMovies {...person} />
              <Acting {...person} />
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default Person;
