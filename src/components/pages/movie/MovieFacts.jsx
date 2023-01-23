import { Box, Typography } from "@mui/material";
import { lime } from "@mui/material/colors";

const MovieFacts = ({ status, original_language, budget, revenue }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 5,
        my: 4,
      }}
    >
      <div>
        <Typography
          variant="body1"
          sx={{ letterSpacing: 2, fontWeight: "700", color: lime[500] }}
        >
          Status
        </Typography>
        <Typography variant="body2" sx={{ color: lime[100] }}>
          {status}
        </Typography>
      </div>
      <div>
        <Typography
          variant="body1"
          sx={{ letterSpacing: 2, fontWeight: "700", color: lime[500] }}
        >
          Original Language
        </Typography>
        <Typography variant="body2" sx={{ color: lime[100] }}>
          {/* {localeCodeToEnglish(original_language)} */}
        </Typography>
      </div>
      <div>
        <Typography
          variant="body1"
          sx={{ letterSpacing: 2, fontWeight: "700", color: lime[500] }}
        >
          Budget
        </Typography>
        <Typography variant="body2" sx={{ color: lime[100] }}>
          {budget <= 0 ? "-" : `$${budget && budget.toLocaleString()}.00`}
        </Typography>
      </div>
      <div>
        <Typography
          variant="body1"
          sx={{ letterSpacing: 2, fontWeight: "700", color: lime[500] }}
        >
          Revenue
        </Typography>
        <Typography variant="body2" sx={{ color: lime[100] }}>
          {revenue <= 0 ? "-" : `$${revenue && revenue.toLocaleString()}.00`}
        </Typography>
      </div>
    </Box>
  );
};

export default MovieFacts;
