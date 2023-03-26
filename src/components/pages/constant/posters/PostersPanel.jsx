import { Tabs, Tab, Card, Box, Typography, Chip } from "@mui/material";
import { grey } from "@mui/material/colors";

import { tabProps } from "../../../constant/tabProps";
import PosterLanguagesLength from "./PosterLanguagesLength";

const PostersPanel = ({
  value,
  images,
  handleChange,
  imageLanguageArray,
  displayLanguage,
  displayLengthItem,
}) => {
  return (
    <Card sx={{ width: 1, borderRadius: "20px", p: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Posters</Typography>
        <Chip label={images?.length} variant="outlined" />
      </Box>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="vertical tabs example"
        sx={{
          mt: 3,
          borderRight: 1,
          borderColor: "divider",
          ".Mui-selected": {
            backgroundColor: grey[800],
            color: "#ffeb3b!important",
          },
          ".MuiTabs-indicator": {
            background: "linear-gradient(to right,#ED4700,#E76F00)",
          },
        }}
      >
        {imageLanguageArray.map((image, index) => (
          <Tab
            key={index}
            label={
              <PosterLanguagesLength
                image={image}
                displayLanguage={displayLanguage}
                displayLengthItem={displayLengthItem}
              />
            }
            {...tabProps(index)}
            sx={{ borderRadius: 1 }}
          />
        ))}
      </Tabs>
    </Card>
  );
};

export default PostersPanel;
