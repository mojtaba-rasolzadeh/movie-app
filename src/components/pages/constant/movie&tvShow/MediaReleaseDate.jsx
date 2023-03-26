import { Box, Typography } from "@mui/material";
import { EventAvailableRounded } from "@mui/icons-material";

const MediaReleaseDate = ({ releaseDate }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 1,
        mb: 1,
      }}
    >
      <EventAvailableRounded />
      <Typography variant="h6" sx={{ fontWeight: "700" }}>
        {releaseDate ? releaseDate?.slice(0, 4) : "-"}
      </Typography>
    </Box>
  );
};

export default MediaReleaseDate;
