import { useState } from "react";
import { Tabs, Tab, styled } from "@mui/material";
import { grey } from "@mui/material/colors";

import TabPanel from '../../../constant/TabPanel';
import { Videos, Backdrops, Posters, MediaItemLength } from "./";

const StyledTabs = styled((props) => (

  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  marginBottom: '1rem',
  '& .MuiTabs-indicator': {
    display: 'none',
  }
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  {
    fontWeight: 700,
    textTransform: 'capitalize',
    letterSpacing: 1,
    color: grey[600],
    '&.Mui-selected': {
      color: '#fff',
    }
  },
);

const Media = ({ id, title, videos, images }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <StyledTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="media label"
      >
        <StyledTab label={<MediaItemLength media={videos?.results} mediaTitle="videos" />} />
        <StyledTab label={<MediaItemLength media={images?.backdrops} mediaTitle="backdrops" />} />
        <StyledTab label={<MediaItemLength media={images?.posters} mediaTitle="posters" />} />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        <Videos id={id} title={title} videos={videos} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Backdrops id={id} title={title} images={images} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Posters id={id} title={title} images={images} />
      </TabPanel>
    </>
  );
};
export default Media;