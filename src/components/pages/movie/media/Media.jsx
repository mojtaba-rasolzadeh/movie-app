import { useState } from "react";
import { Tabs, Tab, styled } from "@mui/material";

import { Videos, Backdrops, Posters, MediaItemLength } from "./";
import TabPanel from '../../../constant/TabPanel';
import { grey } from "@mui/material/colors";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-flexContainer': { justifyContent: 'center!important' },
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
        // scrollButtons
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

    // <Box sx={{ width: "100%", my: 4 }}>
    //   <Box sx={{ display: "flex", alignItems: "center", gap: 4, my: 3 }}>
    //     <Typography variant="h5">
    //       Media
    //     </Typography>
    //     <Tabs
    //       value={value}
    //       onChange={handleChange}
    //       variant="scrollable"
    //       scrollButtons="auto"
    //       aria-label="media label"
    //       sx={{ ".MuiTabs-indicator": { background: 'linear-gradient(to right,#ED4700,#E76F00)' } }}>
    //       <Tab label={<MediaItemLength mediaTitle="videos" media={videos?.results} />} {...tabProps(0)} />
    //       <Tab label={<MediaItemLength mediaTitle="backdrops" media={images?.backdrops} />} {...tabProps(1)} />
    //       <Tab label={<MediaItemLength mediaTitle="posters" media={images?.posters} />} {...tabProps(2)} />
    //     </Tabs>
    //   </Box>
    //   <TabPanel value={value} index={0}>
    //     <Videos id={id} title={title} videos={videos} images={images} />
    //   </TabPanel>
    //   <TabPanel value={value} index={1}>
    //     <Backdrops id={id} title={title} images={images} />
    //   </TabPanel>
    //   <TabPanel value={value} index={2}>
    //     <Posters id={id} title={title} images={images} />
    //   </TabPanel>
    // </Box>