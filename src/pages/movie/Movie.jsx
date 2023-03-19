import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { getLanguagesList, getMovie } from "../../services/MovieService";
import { Loader } from "../../components";
import {
  MoviePoster,
  Overview,
  TrailerShow,
  WatchTrialerButton,
  MovieDetails,
  TopCast,
  SocialLinks,
  MoreDetails,
  Media,
  Recommendations,
  Social
} from "../../components/pages/movie";
import DarkCover from "../../components/constant/DarkCover";

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
        const { status, data } = await getMovie(parseInt(movieId));
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
              backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path})`,
              backgroundPosition: 'center',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderBottomLeftRadius: '20px',
              borderBottomRightRadius: '20px',
            }}
          >
            <DarkCover />
            <Box sx={{ position: 'absolute!important', top: { xs: 0, sm: '16rem' }, padding: { xs: '0', sm: '0 2rem' } }}>
              <Grid container spacing={{ xs: 0, sm: 3 }}>
                <Grid xs={12} md={5} lg={3.3} xl={2.5} xxl={1}>
                  <MoviePoster {...movie} />
                </Grid>
                <Grid xs={12} md={7} lg={8.7} xl={9.5} xxl={11}>
                  <MovieDetails {...movie} />
                  <Overview {...movie} />
                  <WatchTrialerButton videos={movie.videos} displayTrailer={displayTrailer} />
                </Grid>
              </Grid>
              <Grid container spacing={{ xs: 0, sm: 3 }} sx={{ mt: { xs: 0, md: 1 } }} >
                <Grid xs={12} md={5} lg={3.3} xl={2.5}>
                  <SocialLinks {...movie.external_ids} homepage={movie.homepage} />
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