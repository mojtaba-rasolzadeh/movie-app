import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import _ from "lodash";
import { Helmet } from "react-helmet-async";
import { Box, Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { getMovie, getGenresMovieList } from "../../services/MovieService";
import { Loader } from "../";

import {
  TopCast,
  SocialLinks,
  MovieKeywords,
  MovieDetails,
  MovieSpecifications,
  MenuLinkItem,
  Social,
  Media,
  Recommendations,
} from "./";

const Movie = () => {
  const { movieId } = useParams();

  const [loading, setLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});
  const [credits, setCredits] = useState({});
  const [viewMore, setViewMore] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const [externalIds, setExternalIds] = useState({});
  const [reviews, setReviews] = useState({});
  const [videos, setVideos] = useState([]);
  const [images, setImages] = useState({});
  const [recommendations, setRecommendations] = useState({});
  const [genresList, setGenresList] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { status, data: movieData } = await getMovie(movieId);
        const { data: genresData } = await getGenresMovieList();
        if (status === 200) {
          setLoading(false);
          setMovieDetails(movieData);
          setCredits(movieData.credits);
          setKeywords(movieData.keywords.keywords);
          setExternalIds(movieData.external_ids);
          setReviews(movieData.reviews);
          setVideos(movieData.videos);
          setImages(movieData.images);
          setRecommendations(movieData.recommendations);
          setGenresList(genresData.genres);
        }
      } catch (err) {
        setLoading(false);
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  const {
    title,
    release_date,
    status,
    original_language,
    budget,
    revenue,
    homepage,
  } = movieDetails;

  const { facebook_id, instagram_id, twitter_id } = externalIds;
  return (
    <>
      {_.isEmpty(movieDetails) || loading ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>
              {`${title} (${release_date.slice(0, 4)})`} - Movie App
            </title>
          </Helmet>
          <Box
            sx={{
              width: "100%",
              //  height: "90%"
            }}
          >
            {/* <MenuLinkItem /> */}
            <MovieSpecifications {...movieDetails} credits={credits} />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 0, sm: 5 }} sx={{ mt: 5 }}>
              <Grid xs={12} md={9}>
                <TopCast viewMore={viewMore} credits={credits} />
                <Divider />
                <Social title={title} reviews={reviews} />
                <Divider />
                <Media title={title} videos={videos.results} images={images} />
                <Divider />
                <Recommendations
                  title={title}
                  recommendations={recommendations.results}
                />
                <Divider />
              </Grid>
              <Grid xs={12} md={3}>
                <SocialLinks
                  facebook_id={facebook_id}
                  twitter_id={twitter_id}
                  instagram_id={instagram_id}
                  homepage={homepage}
                />
                <MovieDetails
                  status={status}
                  budget={budget}
                  revenue={revenue}
                  original_language={original_language}
                />
                <MovieKeywords keywords={keywords} />
                <Divider />
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};
export default Movie;
