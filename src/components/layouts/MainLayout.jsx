import { ThemeProvider, CssBaseline, Box, Toolbar } from "@mui/material";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import { theme } from "../../theme";
import Header from "../pages/home/header/Header";
import Footer from "./footer/Footer";

const MainLayout = ({ children }) => {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HelmetProvider>
        <Helmet>
          <title>Movie App</title>
        </Helmet>
        <Box sx={{ height: "100vh" }}>
          <Toolbar />
          {/* {location.pathname === "/" && <Header />} */}
          <Box
            sx={{
              // height: "100vh",
              // maxWidth: { xs: "auto", sm: 564, md: 864, lg: 1164, xl: 1500 },
              // maxWidth: { xs: "auto", sm: 890, md: 1170, lg: 1360, xl: 1500 },
              px: { xs: 5, sm: 4 },
              mx: "auto",
            }}
          >
            {children}
          </Box>
          {/* {location.pathname === "/" && <Footer />} */}
        </Box>
      </HelmetProvider>
    </ThemeProvider>
  );
};
export default MainLayout;
