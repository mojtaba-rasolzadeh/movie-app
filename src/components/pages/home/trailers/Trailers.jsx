import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import TabPanel from "../../../constant/TabPanel";
import { MoviesTrailer, TvShowsTrailer, TrailersTabs } from "./";
import {
  TrailersSliderSkeleton,
  TrailerShow,
} from "../../constant/trailersAndVideos";
import {
  getMovies,
  getMovie,
  getMoviesForRent,
} from "../../../../services/MovieService";

const Trailers = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);
  const [forRentItems, setForRentItems] = useState({});
  const [inTheaters, setInTheaters] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);
  const [trailer, setTrailer] = useState(null);
  const [play, setPlay] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setPlay(false);
  };

  const handleToggle = async (movieId) => {
    setPlay(true);
    setOpen((prevOpen) => !prevOpen);

    try {
      const { status, data } = await getMovie(movieId);
      if (status === 200) {
        const trailer = data.videos.results.find(
          (item) => item.name === "Official Trailer"
        );
        setTrailer(trailer ? trailer : data.videos.results[0]);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { status, data: forRentData } = await getMoviesForRent();
        const { data: inTheatersData } = await getMovies("now_playing");
        if (status === 200) {
          setLoading(false);
          setForRentItems(forRentData);
          setInTheaters(inTheatersData);
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
      <Box sx={{ width: "100%", mt: 5 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: { xs: 2.5, sm: 5 },
            mb: 4,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              letterSpacing: 1,
            }}
          >
            Trailers
          </Typography>
          <TrailersTabs value={value} handleChange={handleChange} />
        </Box>
        {loading ? (
          <TrailersSliderSkeleton />
        ) : (
          <>
            <TabPanel value={value} index={0}>
              <MoviesTrailer
                movieData={forRentItems}
                handleToggle={handleToggle}
              />{" "}
            </TabPanel>
            <TabPanel value={value} index={1}>
              <MoviesTrailer
                movieData={inTheaters}
                handleToggle={handleToggle}
              />{" "}
            </TabPanel>
            <TabPanel value={value} index={2}>
              <TvShowsTrailer />{" "}
            </TabPanel>
          </>
        )}
      </Box>
      <TrailerShow
        trailer={trailer}
        open={open}
        play={play}
        handleClose={handleClose}
      />
    </>
  );
};
export default Trailers;
