import { Tab, Tabs, Typography } from "@mui/material";
import { amber } from "@mui/material/colors";

import { tabProps } from "../../../constant/tabProps";

const PopularTabs = ({ value, handleChange }) => {
  const tabsTitle = ["On TV", "For Rent", "In Theaters"];

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="basic tabs"
      variant="scrollable"
      scrollButtons="auto"
      sx={{
        ".MuiTabs-indicator": {
          display: "none",
        },
        ".MuiTab-root.Mui-selected": {
          color: "#000",
          backgroundColor: amber[700],
        },
        borderRadius: 10,
        border: `1px solid ${amber[700]}`,
      }}
    >
      {tabsTitle.map((tab, index) => (
        <Tab
          key={index}
          label={
            <Typography
              variant="body2"
              sx={{ fontWeight: "700", letterSpacing: 1 }}
            >
              {tab}
            </Typography>
          }
          {...tabProps(index)}
        />
      ))}
    </Tabs>
  );
};

export default PopularTabs;
