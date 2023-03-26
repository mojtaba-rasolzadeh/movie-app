import _ from "lodash";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Biography = ({ name, biography }) => {
  return (
    <Box>
      <Typography variant="h4" sx={{ letterSpacing: 1 }}>
        {name}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 4 }}>
        <Typography
          variant="h5"
          sx={{ letterSpacing: 1, color: "text.secondary" }}
        >
          Biography
        </Typography>
        <Typography
          sx={{
            mt: 1,
            fontWeight: 500,
            textAlign: "justify",
            color: grey[600],
          }}
        >
          {_.isEmpty(biography)
            ? `We don't have a biography for ${name}.`
            : biography}
        </Typography>
      </Box>
    </Box>
  );
};
export default Biography;
