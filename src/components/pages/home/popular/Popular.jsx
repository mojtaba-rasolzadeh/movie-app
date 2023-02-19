import { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { amber } from "@mui/material/colors";

import {
  getShowListOnTv,
  getMoviesForRent,
  getListOfMoviesInTheatres,
} from "../../../../services/MovieService";
import { OnTv, Movie } from "./";
import { Loader } from "../../../constant";
import TabPanel from '../../../constant/TabPanel';

function tabProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Popular = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);
  const [onTvItems, setOnTvItems] = useState({});
  const [forRentItems, setForRentItems] = useState({});
  const [inTheaters, setInTheaters] = useState({});

  const tabsTitle = ["On TV", "For Rent", "In Theaters"];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { status, data: onTvData } = await getShowListOnTv();
        const { data: forRentData } = await getMoviesForRent();
        const { data: inTheatersData } = await getListOfMoviesInTheatres();

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
      {
        loading ? <Loader /> :
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
                Popular
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
                {
                  tabsTitle.map((tab, index) => (
                    <Tab
                      key={index}
                      label={
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "700", letterSpacing: 1 }}
                        >
                          {tab}
                        </Typography>
                      }
                      {...tabProps(index)}
                    />
                  ))
                }
              </Tabs>
            </Box>
            <SwipeableViews axis="x" index={value} onChangeIndex={handleChangeIndex}>
              <TabPanel value={value} index={0}>
                <OnTv onTvItems={onTvItems} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Movie movieData={forRentItems} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Movie movieData={inTheaters} />
              </TabPanel>
            </SwipeableViews>
          </Box>
      }
    </>
  );
};
export default Popular;
