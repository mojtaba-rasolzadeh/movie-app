import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Divider } from '@mui/material';

import { Loader } from "../../components/constant";
import { getMovie } from "../../services/MovieService";
import Actors from "../../components/pages/movie/castMovie/Actors";
import Crews from "../../components/pages/movie/castMovie/Crews";
import BackToMain from "../../components/constant/BackToMain";
import CastAndCrewMenu from "../../components/pages/movie/castMovie/CastAndCrewMenu";
import CastAndCrewTitle from "../../components/pages/movie/castMovie/CastAndCrewTitle";


const CastMovie = () => {

  const { movieId } = useParams();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [castAndCrew, setCastAndCrew] = useState([]);

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
          <BackToMain media_data={movie} media_type="movie" searchParams={movieId} />
          <Box style={{ display: 'flex',flexWrap:'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
            <CastAndCrewTitle selectedIndex={selectedIndex} castAndCrew={castAndCrew} />
            <CastAndCrewMenu selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
          </Box>
          <Divider />
          {selectedIndex === 0 ? <Actors castAndCrew={castAndCrew} /> : <Crews castAndCrew={castAndCrew} />}
        </>
      )}
    </>
  );
};

export default CastMovie;