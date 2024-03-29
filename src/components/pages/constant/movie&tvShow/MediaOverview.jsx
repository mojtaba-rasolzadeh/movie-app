import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const MediaOverview = ({ overview }) => {
  return (
    <Box sx={{ mt: { xs: 0, sm: 2, lg: 1 } }}>
      <Typography variant="h6" gutterBottom>
        Overview
      </Typography>
      {overview?.length === 0 ? (
        <>
          <Typography variant="body2" color="text.secondary">
            We don't have an overview translated in English!
          </Typography>
        </>
      ) : (
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 600,
            color: grey[600],
          }}
        >
          {overview}
        </Typography>
      )}
    </Box>
  );
};

export default MediaOverview;
