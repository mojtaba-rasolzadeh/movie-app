import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Box, Button, styled, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { getLanguagesList, getMovie } from "../../services/MovieService";
import { Loader } from "../../components";
import MovieDetails from "../../components/pages/movie/MovieDetails";
import TopCast from "../../components/pages/movie/TopCast";
import Social from "../../components/pages/movie/social/Social";
import Media from "../../components/pages/movie/media/Media";
import Recommendations from "../../components/pages/movie/recommendations/Recommendations";
import SocialLinks from "../../components/pages/movie/SocialLinks";
import MoreDetails from "../../components/pages/movie/MoreDetails";
import Keywords from "../../components/pages/movie/Keywords";
import { DarkCover, MoviePoster, OverviewAndTagline, TrailerShow, WatchTrialerButton } from "../../components/pages/movie";

const Movie = () => {

  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [languagesList, setLanguagesList] = useState([]);

  const [open, setOpen] = useState(false);
  const [play, setPlay] = useState(false);
  const [trailer, setTrailer] = useState(null);

  const handleClose = () => {
    setOpen(false);
    setPlay(false);
  };

  const displayTrailer = () => {
    setOpen(!open);
    setPlay(!play);
    const trailer = movie.videos.results.find(
      (video) => video.name === "Official Trailer"
    );
    setTrailer(trailer ? trailer : movie.videos.results[0]);
  };

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
          <Box
            sx={{
              position: "relative",
              display: "flex",
              width: 1,
              height: { xs: 0, sm: 510 },
              // top: '-2.5rem',
              // mt: 5,
              // padding: "30px 40px",
              backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path})`,
              // backgroundPosition: { xs: 'center', md: "right -200px top" },
              backgroundPosition: 'center',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderBottomLeftRadius: '20px',
              borderBottomRightRadius: '20px',
            }}
          >
            <DarkCover />
            <Box sx={{ position: 'absolute!important', top: { xs: 0, sm: '16rem' }, padding: { xs: '0 .5rem', sm: '0 2rem' } }}>
              <Grid container spacing={{ xs: 0, sm: 3 }}>
                <Grid xs={12} md={5} lg={3.3} xl={2.5} xxl={1}>
                  <MoviePoster {...movie} />
                </Grid>
                <Grid xs={12} md={7} lg={8.7} xl={9.5} xxl={11}>
                  <MovieDetails {...movie} />
                  <OverviewAndTagline {...movie} />
                  <WatchTrialerButton videos={movie.videos} displayTrailer={displayTrailer} />
                </Grid>
              </Grid>
              <Grid container spacing={{ xs: 0, sm: 3 }} >
                <Grid xs={12} md={5} lg={3.3} xl={2.5}>
                  <TopCast {...movie} />
                  <Social {...movie} />
                </Grid>
                <Grid xs={12} md={7} lg={8.7} xl={9.5}>
                  <Grid container spacing={{ xs: 0, sm: 3 }}>
                    <Grid xs={12} md={12} lg={7} xl={7}>
                      <MoreDetails {...movie} languagesList={languagesList} />
                    </Grid>
                    <Grid xs={12} md={12} lg={5} xl={5}>
                      <Media {...movie} />
                    </Grid>
                    <Recommendations {...movie} />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <TrailerShow open={open} handleClose={handleClose} trailer={trailer} play={play} />
        </>
      )}
    </>
  );
};
export default Movie;

{/* <Grid container sx={{ position: 'absolute', top: { xs: 0, sm: '16rem' } }} spacing={3}>
  <Grid xs={12} sm={5} md={3} lg={2.9} xl={3}>
    <MoviePoster {...movie} />
    <TopCast {...movie} />
    <Social {...movie} />
  </Grid>
  <Grid xs={12} sm={7} md={9} lg={9.1} xl={9}>
    <MovieDetails {...movie} />
    <Grid container spacing={3} sx={{ mt: 5 }}>
      <Grid xs={12} sm={7}>
        <OverviewAndTagline {...movie} />
        <WatchTrialerButton videos={movie.videos} displayTrailer={displayTrailer} />
        <MoreDetails {...movie} languagesList={languagesList} />
      </Grid>
      <Grid xs={12} sm={5}>
        <Media {...movie} />
      </Grid>
    </Grid>
    <Recommendations {...movie} />
  </Grid>
</Grid> */}


{/* <MovieDetails {...movie} />
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
          </Grid> */}