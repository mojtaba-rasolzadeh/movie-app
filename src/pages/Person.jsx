import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Avatar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { getPersonDetails } from "../services/MovieService";
import SocialLinks from "../components/pages/people/SocialLinks";
import PersonalInfo from "../components/pages/people/PersonalInfo";

const Person = () => {
  const { personId } = useParams();

  const [person, setPerson] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(person);

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
    <Grid container sx={{ my: 5 }}>
      <Grid xs={12} sm={6.4} md={4.2} lg={3.1} xl={2.35}>
        <Box>
          <Avatar
            variant="rounded"
            sx={{ width: 300, height: 450 }}
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${person.profile_path}`}
          />
          <SocialLinks {...person.external_ids} />
          <PersonalInfo {...person} />
        </Box>
      </Grid>
      <Grid xs={12} sm={5.6} md={7.8} lg={8.9} xl={9.65}>
        <Box sx={{ pl: { xs: 0, sm: 4 } }}>
          {/* <Biography {...person} /> */}
          {/* <KnownForMovies {...person} /> */}
          {/* <Acting {...person} /> */}
        </Box>
      </Grid>
    </Grid>
  );
};
export default Person;
