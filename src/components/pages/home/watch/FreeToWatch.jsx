import { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import { amber } from "@mui/material/colors";

import { getFreeToWatch } from "../../../../services/MovieService";
import { Movies, Tv } from "./";

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

const FreeToWatch = () => {
  const [value, setValue] = useState(0);
  const [typeWatch, setTypeWatch] = useState("movie");
  const [freeWatch, setFreeWatch] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleChangeTypeWatch = (query) => {
    setTypeWatch(query);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { status, data: watchData } = await getFreeToWatch(typeWatch);
        if (status === 200) {
          setFreeWatch(watchData);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [typeWatch]);

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
          Free To Watch
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic-tabs"
          sx={{
            ".MuiTabs-indicator": {
              display: "none",
            },
            ".MuiTab-root.Mui-selected": {
              color: "#000",
              backgroundColor: amber[700],
              borderRadius: 10,
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
                Movies
              </Typography>
            }
            {...tabProps(0)}
            onClick={() => handleChangeTypeWatch("movie")}
          />
          <Tab
            label={
              <Typography
                variant="body2"
                sx={{ fontWeight: "700", letterSpacing: 1 }}
              >
                Tv
              </Typography>
            }
            {...tabProps(1)}
            onClick={() => handleChangeTypeWatch("tv")}
          />
        </Tabs>
      </Box>
      <SwipeableViews axis="x" index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0}>
          <Movies freeWatch={freeWatch} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Tv freeWatch={freeWatch} />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};
export default FreeToWatch;
