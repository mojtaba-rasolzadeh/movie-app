import { AccessTimeFilledRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

import { toHoursAndMinutes } from "../../../../utils/toHoursAndMinutes";

const MediaRuntime = ({ runtime }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
      <AccessTimeFilledRounded />
      {runtime <= 0 ? (
        "-"
      ) : (
        <Typography variant="subtitle2">
          {toHoursAndMinutes(runtime)}
        </Typography>
      )}
    </Box>
  );
};

export default MediaRuntime;
