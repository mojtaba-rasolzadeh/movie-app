import { Box } from "@mui/material";

import { Popular, Trailers, Trending, FreeToWatch } from "../components/pages/home";

const Home = () => {

  return (
    <Box>
      <Popular />
      <Trending />
      <Trailers />
      <FreeToWatch />
    </Box>
  );
};

export default Home;
