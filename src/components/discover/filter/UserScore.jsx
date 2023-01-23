import { useContext } from "react";
import { AccordionDetails, Divider, Slider, Typography } from "@mui/material";

import { DiscoverContext } from "../../../context/DiscoverContext";

const UserScore = () => {
  const { userScoreValue, setUserScoreValue } = useContext(DiscoverContext);
  const userScoreMarks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 10,
      label: "10",
    },
  ];

  return (
    <>
      <AccordionDetails>
        <Typography
          sx={{ fontWeight: "300", color: "text.secondary" }}
          gutterBottom
        >
          User Score
        </Typography>
        <Slider
          aria-label="user score marks"
          step={1}
          min={0}
          max={10}
          marks={userScoreMarks}
          valueLabelDisplay="auto"
          value={userScoreValue}
          onChange={(event, newValue) => setUserScoreValue(newValue)}
        />
      </AccordionDetails>
      <Divider />
    </>
  );
};
export default UserScore;
