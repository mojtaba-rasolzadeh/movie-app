import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { Loader } from "../../components";
import {
  SeriesCast,
  MoreDetails,
  TvShowDetails,
  CurrentSeason,
  Recommendations,
} from "../../components/pages/tvShows";
import {
  MediaPoster,
  SocialLinks,
  MediaOverview,
  WatchTrialerButton,
} from "../../components/pages/constant/movie&tvShow";
import DarkCover from "../../components/constant/DarkCover";
import { Media } from "../../components/pages/constant/media";
import { Social } from "../../components/pages/constant/review";
import { getLanguagesList, getTv } from "../../services/MovieService";
import { TrailerShow } from "../../components/pages/constant/trailersAndVideos";

const TvShow = () => {
  const { tvId } = useParams();
  const [loading, setLoading] = useState(false);
  const [tvShow, setTvShow] = useState([]);
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
    const trailer = tvShow.videos.results.find(
      (video) => video.name === "Official Trailer"
    );
    setTrailer(trailer ? trailer : tvShow.videos.results[0]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { status, data } = await getTv(parseInt(tvId));
        const { data: languageData } = await getLanguagesList();
        if (status === 200) {
          setLoading(false);
          setTvShow(data);
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
            <title>
              {`${tvShow.name} (TV Series ${tvShow.first_air_date?.slice(
                0,
                4
              )})`}{" "}
              | Movie App
            </title>
          </Helmet>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              width: 1,
              height: { xs: 0, sm: 510 },
              backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${tvShow.backdrop_path})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            <DarkCover />
            <Box
              sx={{
                width: 1,
                position: "absolute!important",
                top: { xs: 0, sm: "16rem" },
                padding: { xs: "0", sm: "0 2rem" },
              }}
            >
              <Grid container spacing={{ xs: 0, sm: 3 }}>
                <Grid xs={12} md={5} lg={3.3} xl={2.5} xxl={1}>
                  <MediaPoster
                    title={tvShow.name}
                    posterPath={tvShow.poster_path}
                  />
                </Grid>
                <Grid xs={12} md={7} lg={8.7} xl={9.5} xxl={11}>
                  <TvShowDetails {...tvShow} />
                  <MediaOverview overview={tvShow.overview} />
                  <WatchTrialerButton
                    videos={tvShow.videos}
                    displayTrailer={displayTrailer}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={{ xs: 0, sm: 3 }}
                sx={{ mt: { xs: 0, md: 1 } }}
              >
                <Grid xs={12} md={5} lg={3.3} xl={2.5}>
                  <SocialLinks
                    {...tvShow.external_ids}
                    homepage={tvShow.homepage}
                  />
                  <SeriesCast {...tvShow} />
                  <Social
                    mediaType="tv"
                    mediaId={tvShow.id}
                    mediaTitle={tvShow.name}
                    reviews={tvShow.reviews}
                  />
                </Grid>
                <Grid xs={12} md={7} lg={8.7} xl={9.5}>
                  <Grid container spacing={{ xs: 0, sm: 3 }}>
                    <Grid xs={12} md={12} lg={7} xl={7}>
                      <MoreDetails {...tvShow} languagesList={languagesList} />
                      <CurrentSeason tvShow={tvShow} />
                    </Grid>
                    <Grid xs={12} md={12} lg={5} xl={5}>
                      <Media
                        mediaType="tv"
                        mediaId={tvShow.id}
                        mediaTitle={tvShow.name}
                        {...tvShow}
                      />
                    </Grid>
                  </Grid>
                  <Recommendations {...tvShow} />
                </Grid>
              </Grid>
            </Box>
            <TrailerShow
              open={open}
              handleClose={handleClose}
              trailer={trailer}
              play={play}
            />
          </Box>
        </>
      )}
    </>
  );
};
export default TvShow;
