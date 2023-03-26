import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { TrendingItems, TrendingTabs } from "./";
import TabPanel from "../../../constant/TabPanel";
import { MoviesSliderSkeleton } from "../../constant/movie&tvShow";
import { getDailyOrWeeklyTrendingItems } from "../../../../services/MovieService";

const Trending = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);
  const [time, setTime] = useState("day");
  const [trendingItems, setTrendingItems] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeTimeTrending = (query) => {
    setTime(query);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { status, data: trendingData } =
          await getDailyOrWeeklyTrendingItems(time);
        if (status === 200) {
          setLoading(false);
          setTrendingItems(trendingData);
        }
      } catch (err) {
        setLoading(false);
        console.log(err.message);
      }
    };
    fetchData();
  }, [time]);

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
          Trending
        </Typography>
        <TrendingTabs
          value={value}
          handleChange={handleChange}
          handleChangeTimeTrending={handleChangeTimeTrending}
        />
      </Box>
      {loading ? (
        <MoviesSliderSkeleton />
      ) : (
        <>
          <TabPanel value={value} index={0}>
            <TrendingItems trendingItems={trendingItems} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TrendingItems trendingItems={trendingItems} />
          </TabPanel>
        </>
      )}
    </Box>
  );
};
export default Trending;
