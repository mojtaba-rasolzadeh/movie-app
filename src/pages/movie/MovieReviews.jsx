import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import { getMovie } from "../../services/MovieService";
import BackToMain from "../../components/constant/BackToMain";
import MoviePagination from "../../components/pages/movie/MoviePagination";
import {
  AuthorAvatar,
  AuthorDetails,
  ReviewContent,
  ReadTheRest,
} from "../../components/pages/constant/review";
import ReviewsSkeleton from "../../components/pages/constant/skeletons/ReviewsSkeleton";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);

  const [expanded, setExpanded] = useState("panel0");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getMovie(parseInt(movieId), page);
      if (status === 200) {
        setLoading(false);
        setMovie(data);
      }
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box sx={{ py: 5 }}>
        <BackToMain
          media_data={movie}
          media_type="movie"
          searchParams={movieId}
        />
        {loading ? (
          <ReviewsSkeleton />
        ) : (
          <>
            <Helmet>
              <title>
                {`${movie.title} (${movie.release_date?.slice(
                  0,
                  4
                )}) - Reviews`}{" "}
                | Movie App
              </title>
            </Helmet>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {movie.reviews?.results.map((review, index) => (
                <Accordion
                  key={index}
                  disableGutters
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  sx={{
                    p: 2,
                    "&.MuiAccordion-root": {
                      background: "#000",
                      borderRadius: "20px",
                    },
                    "&.MuiAccordion-root:before": { display: "none" },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    id={`panel${index}bh-header`}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <AuthorAvatar {...review} size={64} />
                      <AuthorDetails {...review} />
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ReviewContent {...review} />
                    <ReadTheRest {...review} />
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </>
        )}
      </Box>
      <MoviePagination movieData={movie.reviews} fetchData={fetchData} />
    </>
  );
};

export default MovieReviews;
