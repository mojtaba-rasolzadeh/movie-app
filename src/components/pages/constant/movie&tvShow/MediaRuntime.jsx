import { AccessTimeFilledRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

import { toHoursAndMinutes } from "../../../../utils/toHoursAndMinutes";

const MediaRuntime = ({ runtime }) => {
  return (
    <>
      {runtime <= 0 ? (
        "-"
      ) : (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
          <AccessTimeFilledRounded />
          <Typography variant="subtitle2">
            {toHoursAndMinutes(runtime)}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default MediaRuntime;
