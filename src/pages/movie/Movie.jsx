import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { getLanguagesList, getMovie } from "../../services/MovieService";
import { Loader } from "../../components";
import MovieDetails from "../../components/pages/movie/MovieDetails";
import TopBilledCast from "../../components/pages/movie/TopBilledCast";
import Social from "../../components/pages/movie/social/Social";
import Media from "../../components/pages/movie/media/Media";
import Recommendations from "../../components/pages/movie/recommendations/Recommendations";
import SocialLinks from "../../components/pages/movie/SocialLinks";
import MovieFacts from "../../components/pages/movie/MovieFacts";
import Keywords from "../../components/pages/movie/Keywords";

const Movie = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [languagesList, setLanguagesList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { status, data } = await getMovie(movieId);
        const { data: languageData } = await getLanguagesList();
        if (status === 200) {
          setLoading(false);
          setMovie(data);
          setLanguagesList(languageData);
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
            <title>{`${movie.title} (${movie.release_date?.slice(0, 4)})`} | Movie App</title>
          </Helmet>
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
              <MovieFacts languagesList={languagesList} {...movie} />
              <Keywords keywords={movie.keywords} />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};
export default Movie;
