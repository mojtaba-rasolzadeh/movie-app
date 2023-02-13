import { useState, useEffect } from "react";
import { Box, Typography, Backdrop } from "@mui/material";
import { amber } from "@mui/material/colors";

import { getDiscoverMovie, getMovie } from "../../../../services/MovieService";
import { Loader } from "../../../constant";
import YouTubePlayer from "./YouTubePlayer";
import TrailerSlider from "./TrailerSlider";

const Trailers = () => {
  const [popularMovie, setPopularMovie] = useState({});
  const [trailer, setTrailer] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [play, setPlay] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setPlay(false);
  };
  const handleToggle = async (movieId) => {
    setPlay(true);
    setOpen((prevOpen) => !prevOpen);

    try {
      setLoading(true);
      const { status, data } = await getMovie(movieId);
      if (status === 200) {
        setLoading(false);
        const trailer = data.videos.results.find(item => item.name === "Official Trailer");
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
        const { status, data: movieData } = await getDiscoverMovie();
        if (status === 200) {
          setPopularMovie(movieData);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ my: 10, py: 3 }}>
      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: "1.25rem", md: "1.5rem" },
          color: amber[500],
          letterSpacing: 1,
        }}
      >
        Trailers{" "}
      </Typography>{" "}
      <TrailerSlider popularMovie={popularMovie} handleToggle={handleToggle} />{" "}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        {loading
          ? <Loader />
          :
          trailer && play ? <YouTubePlayer trailer={trailer} /> : 'Sorry, no trailer available'
        }
        {" "}
      </Backdrop>{" "}
    </Box>
  );
};
export default Trailers;
