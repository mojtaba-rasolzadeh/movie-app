import { Typography, Tabs, Tab } from "@mui/material";
import { amber } from "@mui/material/colors";

import { tabProps } from "../../../constant/tabProps";

const TrailersTabs = ({ value, handleChange }) => {
  const tabsTitle = ["For Rent", "In Theaters", "On TV"];

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="basic tabs"
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
      {tabsTitle?.map((tab, index) => (
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

export default TrailersTabs;
