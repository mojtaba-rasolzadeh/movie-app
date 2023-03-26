import { Box, Typography } from "@mui/material";

const MediaItemLength = ({ mediaTitle, media }) => {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 0.5 }}
    >
      <Typography
        sx={{ fontWeight: 700, textTransform: "capitalize", letterSpacing: 1 }}
      >
        {mediaTitle}
      </Typography>
      <Typography variant="caption">({media?.length})</Typography>
    </Box>
  );
};

export default MediaItemLength;
