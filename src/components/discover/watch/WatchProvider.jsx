import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import { AutocompleteCountry, ProviderMovies } from "./";

const WatchProvider = () => {
  return (
    <Box sx={{ mb: 2 }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="Watch-content"
          id="Watch-header"
        >
          <Typography sx={{ letterSpacing: 1 }}>Where To Watch</Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <Typography
            sx={{ fontWeight: "300", color: "text.secondary" }}
            gutterBottom
          >
            Country
          </Typography>
          <AutocompleteCountry />
          <ProviderMovies />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default WatchProvider;
