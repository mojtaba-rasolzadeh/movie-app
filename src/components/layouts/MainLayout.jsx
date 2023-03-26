import { ThemeProvider, CssBaseline, Box, Toolbar } from "@mui/material";
import { HelmetProvider, Helmet } from "react-helmet-async";

import { theme } from "../../theme";
import ScrollTop from "../constant/ScrollTop";

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HelmetProvider>
        <Helmet>
          <title>Movie App</title>
        </Helmet>
        <Box sx={{ height: "100vh" }}>
          <Toolbar />
          <Box
            sx={{
              px: { xs: "1rem", sm: 4 },
              mx: "auto",
            }}
          >
            <Box id="back-to-top-anchor" />
            {children}
            <ScrollTop />
          </Box>
        </Box>
      </HelmetProvider>
    </ThemeProvider>
  );
};
export default MainLayout;
