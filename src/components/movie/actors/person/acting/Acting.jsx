import { useState } from "react";
import { Box, Typography, Tabs, Tab, Chip } from "@mui/material";
import { amber, cyan, lime, deepOrange } from "@mui/material/colors";

import { CombinedCredits, MovieCredits, TvCredits } from "./";

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

const Acting = ({ combined_credits, movie_credits, tv_credits }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 5, mb: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap:{xs:6,md:0},
          mb: 3,
        }}
      >
        <Typography
          variant="h5"
          
        >
          Acting
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            ".MuiTabs-indicator": {
              backgroundColor: deepOrange[500],
            },
          }}
        >
          <Tab
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography sx={{ color: amber[500] }}>All</Typography>
                <Chip
                  label={combined_credits.cast.length}
                  color="error"
                  size="small"
                  sx={{ px: 0.5 }}
                />
              </Box>
            }
            {...tabProps(0)}
          />
          <Tab
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography sx={{ color: amber[500] }}>Movies</Typography>
                <Chip
                  label={movie_credits.cast.length}
                  color="error"
                  size="small"
                  sx={{ px: 0.5 }}
                />
              </Box>
            }
            {...tabProps(1)}
          />
          <Tab
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography sx={{ color: amber[500] }}>Tv Shows</Typography>
                <Chip
                  label={tv_credits.cast.length}
                  color="error"
                  size="small"
                  sx={{ px: 0.5 }}
                />
              </Box>
            }
            {...tabProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CombinedCredits combinedCredits={combined_credits.cast} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MovieCredits movieCredits={movie_credits.cast} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TvCredits tvCredits={tv_credits.cast} />
      </TabPanel>
    </Box>
  );
};
export default Acting;
