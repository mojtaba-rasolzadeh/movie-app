import { amber } from "@mui/material/colors";
import { Typography, Tabs, Tab } from "@mui/material";

import { tabProps } from "../../../constant/tabProps";

const FreeToWatchTabs = ({ value, handleChange, handleChangeTypeWatch }) => {
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="basic-tabs"
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
            Movies
          </Typography>
        }
        {...tabProps(0)}
        onClick={() => handleChangeTypeWatch("movie")}
      />
      <Tab
        label={
          <Typography
            variant="body2"
            sx={{ fontWeight: "700", letterSpacing: 1 }}
          >
            Tv
          </Typography>
        }
        {...tabProps(1)}
        onClick={() => handleChangeTypeWatch("tv")}
      />
    </Tabs>
  );
};

export default FreeToWatchTabs;
