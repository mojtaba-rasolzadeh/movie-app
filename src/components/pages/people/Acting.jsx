import { useState } from "react";
import { Box, Divider, Typography } from "@mui/material";

import { CombinedCredits, MovieCredits, TvCredits, ActingMediaMenu } from "./";

const Acting = ({ combined_credits, movie_credits, tv_credits }) => {

  const [selectedIndex, setSelectedIndex] = useState(0);

  let content;

  switch (selectedIndex) {
    case 0:
      content = <CombinedCredits combinedCredits={combined_credits?.cast} />;
      break;
    case 1:
      content = <MovieCredits movieCredits={movie_credits.cast} />;
      break;
    case 2:
      content = <TvCredits tvCredits={tv_credits.cast} />;
      break;
    default:
      return;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 3
        }}>
          <Typography variant="h5" sx={{ letterSpacing: 1 }}>
            Acting
          </Typography>
        </Box>
        <ActingMediaMenu
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </Box>
      <Divider />
      {content}
    </>
  );
};
export default Acting;