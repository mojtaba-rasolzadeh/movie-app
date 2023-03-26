import { Box } from "@mui/material";

const DarkCover = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        backgroundImage: {
          xs: "linear-gradient(to right, rgba(32, 32, 32 , 73%) 150px, rgba(32, 32, 32 , 73%) 100%)",
        },
      }}
    ></Box>
  );
};

export default DarkCover;
