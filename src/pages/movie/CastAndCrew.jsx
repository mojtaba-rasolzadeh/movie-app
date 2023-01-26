import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { Loader } from "../../components/constant";
import { getMovie } from "../../services/MovieService";
import Actors from "../../components/pages/movie/Actors";
import Crew from "../../components/pages/movie/Crew";
import BackToMain from "../../components/pages/movie/BackToMain";

const CastAndCrew = () => {
  const { movieId } = useParams();

  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [castAndCrew, setCastAndCrew] = useState([]);

  console.log(loading)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { status, data } = await getMovie(parseInt(movieId));
        if (status === 200) {
          setLoading(false);
          setMovie(data);
          setCastAndCrew(data.credits);
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
          <BackToMain movie={movie} />
          <Grid container spacing={3} sx={{ my: 2 }}>
            <Grid xs={6}>
              <Actors castAndCrew={castAndCrew} />
            </Grid>
            <Grid xs={6}>
              <Crew castAndCrew={castAndCrew} />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default CastAndCrew;
