import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import { Movies, TvShows } from "../";
import PopularTabs from "./PopularTabs";
import TabPanel from "../../../constant/TabPanel";
import MoviesSliderSkeleton from "../../constant/movie&tvShow/MoviesSliderSkeleton";
import {
  getMoviesForRent,
  getMovies,
  getTvShows,
} from "../../../../services/MovieService";

const Popular = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);
  const [onTvItems, setOnTvItems] = useState({});
  const [forRentItems, setForRentItems] = useState({});
  const [inTheaters, setInTheaters] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { status, data: onTvData } = await getTvShows("on_the_air");
        const { data: forRentData } = await getMoviesForRent();
        const { data: inTheatersData } = await getMovies("now_playing");

        if (status === 200) {
          setLoading(false);
          setOnTvItems(onTvData);
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
            Popular
          </Typography>
          <PopularTabs value={value} handleChange={handleChange} />
        </Box>
        {loading ? (
          <MoviesSliderSkeleton />
        ) : (
          <>
            <TabPanel value={value} index={0}>
              <TvShows tvShowsData={onTvItems} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Movies moviesData={forRentItems} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Movies moviesData={inTheaters} />
            </TabPanel>
          </>
        )}
      </Box>
    </>
  );
};
export default Popular;
