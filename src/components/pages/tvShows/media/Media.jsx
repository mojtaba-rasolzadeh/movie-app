import { useState } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";

import { Videos, Backdrops, Posters, MediaItemLength } from "./";
import TabPanel from '../../../constant/TabPanel';

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
          sx={{ ".MuiTabs-indicator": { background: 'linear-gradient(to right,#ED4700,#E76F00)' } }}>
          <Tab label={<MediaItemLength mediaTitle="videos" media={videos?.results} />} {...tabProps(0)} />
          <Tab label={<MediaItemLength mediaTitle="backdrops" media={images?.backdrops} />} {...tabProps(1)} />
          <Tab label={<MediaItemLength mediaTitle="posters" media={images?.posters} />} {...tabProps(2)} />
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