import { useContext } from "react";
import { AccordionDetails, Divider, Slider, Typography } from "@mui/material";

import { DiscoverContext } from "../../../context/DiscoverContext";

const UserVotes = () => {
  const { userVotesValue, setUserVotesValue } = useContext(DiscoverContext);
  const userVotesMarks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 100,
      label: "100",
    },
    {
      value: 200,
      label: "200",
    },
    {
      value: 300,
      label: "300",
    },
    {
      value: 400,
      label: "400",
    },
    {
      value: 500,
      label: "500",
    },
  ];

  return (
    <>
      <AccordionDetails>
        <Typography
          sx={{ fontWeight: "300", color: "text.secondary" }}
          gutterBottom
        >
          User Votes
        </Typography>
        <Slider
          aria-label="user votes marks"
          step={50}
          min={0}
          max={500}
          marks={userVotesMarks}
          valueLabelDisplay="auto"
          value={userVotesValue}
          onChange={(event, newValue) => setUserVotesValue(newValue)}
        />
      </AccordionDetails>
      <Divider />
    </>
  );
};
export default UserVotes;
