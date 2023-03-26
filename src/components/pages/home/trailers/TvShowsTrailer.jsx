import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";

import TrailerPoster from "./TrailerPoster";
import { TrailerShow } from "../../constant/trailersAndVideos";
import { trailerSliderSettings } from "../../constant/SliderSettings";
import { getTv, getTvShows } from "../../../../services/MovieService";
import PreviousAndNextArrow from "../../constant/PreviousAndNextArrow";
import {
  TrailersSliderSkeleton,
  PlayVideoButton,
} from "../../constant/trailersAndVideos";

const TvShowsTrailer = () => {
  const sliderRef = useRef();
  const [open, setOpen] = useState(false);
  const [play, setPlay] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setPlay(false);
  };
  const [loading, setLoading] = useState(false);
  const [tvShows, setTvShows] = useState({});
  const [trailer, setTrailer] = useState(null);

  const handleToggle = async (tvId) => {
    setPlay(true);
    setOpen((prevOpen) => !prevOpen);

    try {
      setLoading(true);
      const { status, data } = await getTv(tvId);
      if (status === 200) {
        setLoading(false);
        const trailer = data.videos.results.find(
          (item) => item.name === "Official Trailer"
        );
        setTrailer(trailer ? trailer : data.videos.results[0]);
      }
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { status, data } = await getTvShows("on_the_air");
        if (status === 200) {
          setTvShows(data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <TrailersSliderSkeleton />
      ) : (
        <Box>
          <Slider ref={sliderRef} {...trailerSliderSettings}>
            {tvShows.results?.map((tv) => (
              <Box
                key={tv.id}
                sx={{
                  display: "flex!important",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  my: 3.75,
                  textAlign: "center",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <TrailerPoster {...tv} />
                  <PlayVideoButton handleToggle={() => handleToggle(tv.id)} />
                </Box>{" "}
                <Link to={`/tv/${tv.id}`} style={{ textDecoration: "none" }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      display: "inline-block",
                      color: "#fff",
                      "&:hover": { color: "text.secondary" },
                      mt: 1,
                    }}
                  >
                    {tv.name}{" "}
                  </Typography>{" "}
                </Link>{" "}
              </Box>
            ))}{" "}
          </Slider>
          <PreviousAndNextArrow sliderRef={sliderRef} />
          <TrailerShow
            trailer={trailer}
            open={open}
            play={play}
            handleClose={handleClose}
          />
        </Box>
      )}
    </>
  );
};

export default TvShowsTrailer;
