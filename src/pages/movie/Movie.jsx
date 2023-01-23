import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Divider, Box, IconButton, Link, Tooltip } from "@mui/material";
import {
  Facebook,
  InsertLinkRounded,
  Instagram,
  LinkRounded,
  SlowMotionVideo,
  Twitter,
} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";

import { getMovie } from "../../services/MovieService";
import { Loader } from "../../components";
import MovieDetails from "../../components/pages/movie/MovieDetails";
import TopBilledCast from "../../components/pages/movie/TopBilledCast";
import Social from "../../components/pages/movie/social/Social";
import Media from "../../components/pages/movie/media/Media";
import Recommendations from "../../components/pages/movie/Recommendations";
import SocialLinks from "../../components/pages/movie/SocialLinks";
import MovieFacts from "../../components/pages/movie/MovieFacts";
import Keywords from "../../components/pages/movie/Keywords";

const Movie = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  console.log(movie);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { status, data } = await getMovie(movieId);
        if (status === 200) {
          setLoading(false);
          setMovie(data);
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
          <MovieDetails {...movie} />
          <Grid container spacing={2} sx={{ my: 3 }}>
            <Grid xs={12} sm={9}>
              <TopBilledCast {...movie} />
              <Divider />
              <Social {...movie} />
              <Divider />
              <Media {...movie} />
              <Divider />
              <Recommendations {...movie} />
            </Grid>
            <Grid xs={12} sm={3}>
              <SocialLinks {...movie.external_ids} />
              <MovieFacts {...movie} />
              <Keywords keywords={movie.keywords} />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};
export default Movie;
