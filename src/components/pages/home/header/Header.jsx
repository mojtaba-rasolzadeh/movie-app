import { Box, Typography } from "@mui/material";
import { grey, lime } from "@mui/material/colors";

import bg01 from "../../../../assets/bg01.jpg";
import { SearchInputRounded } from "../../../constant/SearchInputs";

const Header = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: 300,
        px: {
          xs: 3.75,
          md: 10,
          lg: 7.5,
        },
        py: {
          xs: 8.75,
          md: 6.25,
        },
        backgroundImage: `url(${bg01})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: "10",
      }}
      boxShadow={10}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: "rgba(0,0,0,0.7)",
          zIndex: "-1",
        }}
      ></Box>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontFamily: "monospace",
            fontWeight: "700",
            color: lime[500],
            letterSpacing: 2,
          }}
          gutterBottom
        >
          Welcome.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1rem", md: "1.75rem" },
            fontFamily: "sans-serif",
            fontWeight: "700",
            letterSpacing: 1,
            color: grey[500],
          }}
        >
          Millions of movies, TV shows and people to discover. Explore now.
        </Typography>
      </Box>
      <SearchInputRounded />
    </Box>
  );
};
export default Header;
