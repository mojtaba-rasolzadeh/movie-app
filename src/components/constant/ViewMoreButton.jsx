import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ArrowForwardRounded } from "@mui/icons-material";

const ViewMoreButton = ({ link }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        ml: 2,
      }}
    >
      <Link to={link} style={{ textDecoration: "none" }}>
        <Typography
          sx={{
            width: 80,
            color: "#fff",
            "&:hover": { color: "text.secondary" },
          }}
        >
          View More
        </Typography>
      </Link>
      <ArrowForwardRounded />
    </Box>
  );
};

export default ViewMoreButton;
