import { useContext } from "react";
import { AccordionDetails, Slider, Typography } from "@mui/material";

import { DiscoverContext } from "../../../context/DiscoverContext";

const Runtime = () => {
  const { runtimeValue, setRuntimeValue } = useContext(DiscoverContext);
  const runtimeMarks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 120,
      label: "120",
    },
    {
      value: 240,
      label: "240",
    },
    {
      value: 360,
      label: "360",
    },
  ];
  return (
    <AccordionDetails>
      <Typography
        sx={{ fontWeight: "300", color: "text.secondary" }}
        gutterBottom
      >
        Runtime
      </Typography>
      <Slider
        aria-label="runtime marks"
        step={15}
        min={0}
        max={400}
        marks={runtimeMarks}
        valueLabelDisplay="auto"
        value={runtimeValue}
        onChange={(event, newValue) => setRuntimeValue(newValue)}
      />
    </AccordionDetails>
  );
};
export default Runtime;
