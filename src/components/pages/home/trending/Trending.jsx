import { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { amber } from "@mui/material/colors";

import { getDailyOrWeeklyTrendingItems } from "../../../../services/MovieService";
import TrendingTime from "./TrendingTime";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function tabProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Trending = () => {
  const [value, setValue] = useState(0);
  const [time, setTime] = useState("day");
  const [trendingItems, setTrendingItems] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleChangeTimeTrending = (query) => {
    setTime(query);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { status, data: trendingData } =
          await getDailyOrWeeklyTrendingItems(time);
        if (status === 200) {
          setTrendingItems(trendingData);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [time]);

  return (
    <Box sx={{ width: "100%", my: 10 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            color: amber[500],
            letterSpacing: 1,
          }}
        >
          Trending
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs"
          sx={{
            ".MuiTabs-indicator": {
              display: "none",
            },
            ".MuiTab-root.Mui-selected": {
              color: "#000",
              backgroundColor: amber[700],
            },
            borderRadius: 10,
            border: `1px solid ${amber[700]}`,
          }}
        >
          <Tab
            label={
              <Typography
                variant="body2"
                sx={{ fontWeight: "700", letterSpacing: 1 }}
              >
                Today
              </Typography>
            }
            {...tabProps(0)}
            onClick={() => handleChangeTimeTrending("day")}
          />
          <Tab
            label={
              <Typography
                variant="body2"
                sx={{ fontWeight: "700", letterSpacing: 1 }}
              >
                This Week
              </Typography>
            }
            {...tabProps(1)}
            onClick={() => handleChangeTimeTrending("week")}
          />
        </Tabs>
      </Box>
      <SwipeableViews axis="x" index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0}>
          <TrendingTime trendingItems={trendingItems} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TrendingTime trendingItems={trendingItems} />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};
export default Trending;
