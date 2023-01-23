import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  Divider,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import {
  Availabilities,
  ReleaseDates,
  Genres,
  Certification,
  Language,
  UserScore,
  UserVotes,
  Runtime,
} from ".";

const Filter = () => {
  return (
    <Box sx={{ mb: 2 }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="filters-content"
          id="filters-header"
        >
          <Typography sx={{ letterSpacing: 1 }}>Filters</Typography>
        </AccordionSummary>
        <Divider />
        <Availabilities />
        <ReleaseDates />
        <Genres />
        <Certification />
        <Language />
        <UserScore />
        <UserVotes />
        <Runtime />
      </Accordion>
    </Box>
  );
};
export default Filter;
