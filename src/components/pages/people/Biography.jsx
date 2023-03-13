import { Box, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";

const Biography = ({ name, biography }) => {

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          display: "inline-block",
          fontWeight: 700,
          background: 'linear-gradient(to right,#ED4700,#E76F00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: 1,
        }}
      >
        {name}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 4 }}>
        <Typography variant="h5" sx={{ letterSpacing:1,color: yellow[700]}}>
          Biography
        </Typography>
        <Typography sx={{ mt: 1, fontWeight: 300 ,textAlign:'justify'}}>
          {biography}
        </Typography>
      </Box>
    </Box>
  );
};
export default Biography;
