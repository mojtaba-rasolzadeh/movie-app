import { useState } from "react";
import { Tabs, Tab, styled, Box } from "@mui/material";
import { grey } from "@mui/material/colors";

import MediaItemLength from "./MediaItemLength";
import { Videos, Backdrops, Posters } from "./";
import TabPanel from "../../../constant/TabPanel";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  marginBottom: "1rem",
  "& .MuiTabs-indicator": {
    display: "none",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)({
  fontWeight: 700,
  textTransform: "capitalize",
  letterSpacing: 1,
  color: grey[600],
  "&.Mui-selected": {
    color: "#fff",
  },
});

const Media = ({ mediaType, mediaId, mediaTitle, videos, images }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ mt: { xs: 2, md: 0 } }}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="media label"
      >
        <StyledTab
          label={
            <MediaItemLength media={videos?.results} mediaTitle="videos" />
          }
        />
        <StyledTab
          label={
            <MediaItemLength media={images?.backdrops} mediaTitle="backdrops" />
          }
        />
        <StyledTab
          label={
            <MediaItemLength media={images?.posters} mediaTitle="posters" />
          }
        />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        <Videos
          mediaType={mediaType}
          mediaId={mediaId}
          mediaTitle={mediaTitle}
          videos={videos}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Backdrops
          mediaType={mediaType}
          mediaId={mediaId}
          mediaTitle={mediaTitle}
          images={images}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Posters
          mediaType={mediaType}
          mediaId={mediaId}
          mediaTitle={mediaTitle}
          images={images}
        />
      </TabPanel>
    </Box>
  );
};
export default Media;
