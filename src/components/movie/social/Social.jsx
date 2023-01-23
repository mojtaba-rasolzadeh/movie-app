import { useState } from "react";
import _ from "lodash";
import { Box, Tabs, Tab, Typography, Chip } from "@mui/material";
import { amber, lime, orange, yellow } from "@mui/material/colors";

import RandomReview from "./review/RandomReview";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      arial-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
function tabProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const Social = ({ title, reviews }) => {
  const randomIndex = Math.floor(Math.random() * reviews.results.length);

  const [value, setValue] = useState(0);
  const review = reviews.results[randomIndex];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", my: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          my: 3,
        }}
      >
        <Typography variant="h5" sx={{ color: "cadetblue" }}>
          Social
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="social label"
          sx={{ ".MuiTabs-indicator": { backgroundColor: orange[500] } }}
        >
          <Tab
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Typography sx={{ color: yellow[700] }}>Reviews </Typography>
                <Chip
                  label={
                    <Typography
                      variant="caption"
                      component="span"
                      color="text.secondary"
                      sx={{ fontWeight: "700" }}
                    >
                      {reviews.results.length}
                    </Typography>
                  }
                  color="error"
                  size="small"
                  sx={{ px: 0.75 }}
                />
              </Box>
            }
            {...tabProps(0)}
          />
          <Tab label="Discussions" {...tabProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {_.isEmpty(reviews.results) ? (
          <Typography color="text.secondary" sx={{ fontWeight: "300" }}>
            {` We don't have any reviews for ${title}.`}
          </Typography>
        ) : (
          <RandomReview review={review} />
        )}
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
    </Box>
  );
};
export default Social;
