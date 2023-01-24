import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Avatar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { getPersonDetails } from "../services/MovieService";
import SocialLinks from "../components/pages/people/SocialLinks";
import PersonalInfo from "../components/pages/people/PersonalInfo";
import Biography from "../components/pages/people/Biography";
import KnownFor from "../components/pages/people/KnownFor";
import Acting from "../components/pages/people/Acting";

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
      <Grid xs={12} sm={7.2} md={4.5} lg={3.28} xl={2.5}>
        <Box>
          <Avatar
            variant="rounded"
            sx={{ maxWidth: 300,width:1, height: 450 }}
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${person.profile_path}`}
          />
          <SocialLinks {...person.external_ids} />
          <PersonalInfo {...person} />
        </Box>
      </Grid>
      <Grid xs={12} sm={4.8} md={7.5} lg={8} xl={9.5}>
        <Box sx={{ pl: { xs: 0, sm: 4 } }}>
          <Biography {...person} />
          <KnownFor {...person} />
          <Acting {...person} />
        </Box>
      </Grid>
    </Grid>
  );
};
export default Person;
