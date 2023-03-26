import { Box, Typography } from "@mui/material";
import { ViewAllMedia } from "../constant/media";

import Season from "./allSeasons/Season";

const CurrentSeason = ({ tvShow }) => {
  const season = tvShow.seasons?.find(
    (season) => season.season_number === tvShow.number_of_seasons
  );

  return (
    <Box sx={{ mb: { xs: 3, lg: 0 } }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Current Season
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", lg: "flex-start" },
        }}
      >
        <Season tvShow={tvShow} season={season} />
        <ViewAllMedia
          mediaType="tv"
          mediaId={tvShow.id}
          mediaTitle={tvShow.name}
          text="View All Seasons"
          link="seasons"
        />
      </Box>
    </Box>
  );
};

export default CurrentSeason;
