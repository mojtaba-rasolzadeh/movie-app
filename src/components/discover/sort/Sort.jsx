import { useContext } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import { DiscoverContext } from "../../../context/DiscoverContext";

const Sort = () => {
  const { sortBy, setSortBy } = useContext(DiscoverContext);
  const handleChangeSort = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <Box sx={{ mb: 2 }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="sort-content"
          id="sort-header"
        >
          <Typography sx={{ letterSpacing: 1 }}>Sort</Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <Typography
            sx={{
              fontWeight: "300",
              color: "text.secondary",
              letterSpacing: 1,
            }}
          >
            Sort Results By
          </Typography>
          <Select
            id="sort-select"
            value={sortBy}
            onChange={handleChangeSort}
            fullWidth
            sx={{ mt: 2 }}
          >
            <MenuItem value="popularity.desc">Popularity Descending</MenuItem>
            <MenuItem value="popularity.asc">Popularity Ascending</MenuItem>
            <MenuItem value="release_date.desc">
              Release Date Descending
            </MenuItem>
            <MenuItem value="release_date.asc">Release Date Ascending</MenuItem>
            <MenuItem value="vote_average.desc">Rating Descending</MenuItem>
            <MenuItem value="vote_average.asc">Rating Ascending</MenuItem>
            <MenuItem value="original_title.desc">Title (A-Z)</MenuItem>
            <MenuItem value="original_title.asc">Title (Z-A)</MenuItem>
          </Select>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default Sort;
