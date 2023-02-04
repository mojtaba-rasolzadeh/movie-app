import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { getLanguagesList, getTv } from "../../services/MovieService";
import { Loader } from "../../components";
import TvShowDetails from "../../components/pages/tvShows/TvShowDetails";

import Media from "../../components/pages/tvShows/media/Media";
import Recommendations from "../../components/pages/movie/Recommendations";
import SocialLinks from "../../components/pages/movie/SocialLinks";
import MovieFacts from "../../components/pages/movie/MovieFacts";
import Keywords from "../../components/pages/movie/Keywords";
import SeriesCast from "../../components/pages/tvShows/SeriesCast";
import CurrentSeason from "../../components/pages/tvShows/CurrentSeason";
import Social from "../../components/pages/tvShows/social/Social";

const TvShow = () => {
  const { tvId } = useParams();
  const [loading, setLoading] = useState(false);
  const [tvShow, setTvShow] = useState([]);
  const [languagesList, setLanguagesList] = useState([]);

  console.log(tvShow)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { status, data } = await getTv(tvId);
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
          <TvShowDetails {...tvShow} />
          <Grid container spacing={2} sx={{ my: 3 }}>
            <Grid xs={12} sm={9}>
              <SeriesCast {...tvShow} />
              <Divider />
              <CurrentSeason {...tvShow} />
              <Divider />
               <Social {...tvShow} />
               <Divider />
              <Media {...tvShow} />
              {/*<Divider />
              <Recommendations {...tvShow} /> */}
            </Grid>
            {/* <Grid xs={12} sm={3}>
              <SocialLinks {...tvShow.external_ids} />
              <MovieFacts languagesList={languagesList} {...tvShow} />
              <Keywords keywords={tvShow.keywords} />
            </Grid> */}
          </Grid>
        </>
      )}
    </>
  );
};
export default TvShow;
