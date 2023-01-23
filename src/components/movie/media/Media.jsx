import { useState } from "react";
import { Box, Typography, Tabs, Tab, Chip } from "@mui/material";
import { orange, teal, yellow } from "@mui/material/colors";

import { Videos, Posters, Backdrops, MostPopular } from "./";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

const Media = ({ title, videos, images }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", my: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 5, my: 3 }}>
        <Typography variant="h5" sx={{ color: "cadetblue" }}>
          Media
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="media label"
          sx={{
            ".MuiTabs-indicator": {
              backgroundColor: orange[500],
            },
          }}
        >
          <Tab
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Typography sx={{ color: yellow[700] }}>Videos </Typography>
                <Chip
                  label={
                    <Typography
                      variant="caption"
                      component="span"
                      color="text.secondary"
                      sx={{ fontWeight: "700" }}
                    >
                      {videos.length}
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
          <Tab
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Typography sx={{ color: yellow[700] }}>Backdrops </Typography>
                <Chip
                  label={
                    <Typography
                      variant="caption"
                      component="span"
                      color="text.secondary"
                      sx={{ fontWeight: "700" }}
                    >
                      {images.backdrops.length}
                    </Typography>
                  }
                  color="error"
                  size="small"
                  sx={{ px: 0.75 }}
                />
              </Box>
            }
            {...tabProps(1)}
          />
          <Tab
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Typography sx={{ color: yellow[700] }}>Posters </Typography>
                <Chip
                  label={
                    <Typography
                      variant="caption"
                      component="span"
                      color="text.secondary"
                      sx={{ fontWeight: "700" }}
                    >
                      {images.posters.length}
                    </Typography>
                  }
                  color="error"
                  size="small"
                  sx={{ px: 0.75 }}
                />
              </Box>
            }
            {...tabProps(2)}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Videos title={title} videos={videos} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Backdrops title={title} backdrops={images.backdrops} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Posters title={title} posters={images.posters} />
      </TabPanel>
    </Box>
  );
};
export default Media;
