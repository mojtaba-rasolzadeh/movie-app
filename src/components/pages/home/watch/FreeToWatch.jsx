import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { Movies, TvShows } from "../";
import FreeToWatchTabs from "./FreeToWatchTabs";
import TabPanel from "../../../constant/TabPanel";
import { MoviesSliderSkeleton } from "../../constant/movie&tvShow";
import { getFreeToWatch } from "../../../../services/MovieService";

const FreeToWatch = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);
  const [typeWatch, setTypeWatch] = useState("movie");
  const [freeWatch, setFreeWatch] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeTypeWatch = (query) => {
    setTypeWatch(query);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { status, data: watchData } = await getFreeToWatch(typeWatch);
        if (status === 200) {
          setLoading(false);
          setFreeWatch(watchData);
        }
      } catch (err) {
        setLoading(false);
        console.log(err.message);
      }
    };
    fetchData();
  }, [typeWatch]);

  return (
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
          Free To Watch
        </Typography>
        <FreeToWatchTabs
          value={value}
          handleChange={handleChange}
          handleChangeTypeWatch={handleChangeTypeWatch}
        />
      </Box>
      {loading ? (
        <MoviesSliderSkeleton />
      ) : (
        <>
          <TabPanel value={value} index={0}>
            <Movies moviesData={freeWatch} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TvShows tvShowsData={freeWatch} />
          </TabPanel>
        </>
      )}
    </Box>
  );
};
export default FreeToWatch;
