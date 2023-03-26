import { Tabs, Tab, Card, Typography, Chip, Box } from "@mui/material";
import { grey } from "@mui/material/colors";

import { tabProps } from "../../../constant/tabProps";
import BackdropLanguagesLength from "./BackdropLanguagesLength";

const BackdropsPanel = ({
  value,
  images,
  handleChange,
  imageLanguageArray,
  displayLanguage,
  displayLengthItem,
}) => {
  return (
    <Card sx={{ width: 1, borderRadius: "20px", p: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Backdrops</Typography>
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
              <BackdropLanguagesLength
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

export default BackdropsPanel;
