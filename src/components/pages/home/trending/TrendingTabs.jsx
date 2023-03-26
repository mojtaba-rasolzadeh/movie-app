import { Tab, Tabs, Typography } from "@mui/material";
import { amber } from "@mui/material/colors";

import { tabProps } from "../../../constant/tabProps";

const TrendingTabs = ({ value, handleChange, handleChangeTimeTrending }) => {
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
      <Tab
        label={
          <Typography
            variant="body2"
            sx={{ fontWeight: "700", letterSpacing: 1 }}
          >
            Today
          </Typography>
        }
        {...tabProps(0)}
        onClick={() => handleChangeTimeTrending("day")}
      />
      <Tab
        label={
          <Typography
            variant="body2"
            sx={{ fontWeight: "700", letterSpacing: 1 }}
          >
            This Week
          </Typography>
        }
        {...tabProps(1)}
        onClick={() => handleChangeTimeTrending("week")}
      />
    </Tabs>
  );
};

export default TrendingTabs;
