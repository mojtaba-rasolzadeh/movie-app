import { Box } from "@mui/material";

import Actor from './Actor';

const Actors = ({ castAndCrew }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 3,
      mt: 2
    }}>
      {castAndCrew.cast?.map((cast) => (
        <Actor key={cast.id} {...cast} />
      ))}
    </Box>
  );
};

export default Actors;