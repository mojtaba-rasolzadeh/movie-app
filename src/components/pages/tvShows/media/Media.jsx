import { useState } from "react";
import { Box, Typography, Tabs, Tab, Chip } from "@mui/material";
import { orange, yellow } from "@mui/material/colors";

import TabPanel from '../../../constant/TabPanel';
import { Videos, Backdrops, Posters } from "./";

function tabProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Media = ({ id, name, videos, images }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", my: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 4, my: 3 }}>
        <Typography variant="h5">
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
                <Typography sx={{ color: yellow[700], textTransform: 'capitalize', letterSpacing: 1 }}>Videos </Typography>
                <Chip
                  label={
                    <Typography
                      variant="caption"
                      component="span"
                      color="text.secondary"
                      sx={{ fontWeight: "700" }}
                    >
                      {videos?.results.length}
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
                <Typography sx={{ color: yellow[700], textTransform: 'capitalize', letterSpacing: 1 }}>Backdrops </Typography>
                <Chip
                  label={
                    <Typography
                      variant="caption"
                      component="span"
                      color="text.secondary"
                      sx={{ fontWeight: "700" }}
                    >
                      {images?.backdrops.length}
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
                <Typography sx={{ color: yellow[700], textTransform: 'capitalize', letterSpacing: 1 }}>Posters </Typography>
                <Chip
                  label={
                    <Typography
                      variant="caption"
                      component="span"
                      color="text.secondary"
                      sx={{ fontWeight: "700" }}
                    >
                      {images?.posters.length}
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
        <Videos id={id} name={name} videos={videos} images={images} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Backdrops id={id} name={name} images={images} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Posters id={id} name={name} images={images} />
      </TabPanel>
    </Box>
  );
};
export default Media;
