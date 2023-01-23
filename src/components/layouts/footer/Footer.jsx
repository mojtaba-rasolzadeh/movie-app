import { Box } from "@mui/material";

import footerImg from "../../../assets/footer.jpg";

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 200, md: 248 },
        backgroundImage: `url(${footerImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      boxShadow={10}
    >
      <Box sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.9)'
      }}>
      </Box>
    </Box>
  );
};
export default Footer;
