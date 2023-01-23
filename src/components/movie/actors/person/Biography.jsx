import _ from "lodash";
import { Box, Typography, Link } from "@mui/material";
import { teal, blueGrey } from "@mui/material/colors";

const Biography = ({ id, name, biography }) => {
  const newLineIndex = biography.indexOf("\n");

  return (
    <Box>
      <Link
        href={`/person/${id}-${name.toLowerCase().split(" ").join("-")}`}
        underline="none"
      >
        <Typography
          variant="h4"
          sx={{
            display: "inline-block",
            fontWeight: 700,
            letterSpacing: 2,
            color: teal[400],
            "&:hover": { color: teal[500] },
          }}
        >
          {name}
        </Typography>
      </Link>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 4 }}>
        <Typography variant="h6">Biography</Typography>
        <Typography sx={{ mt: 1.5, color: blueGrey[300], fontWeight: 300 }}>
          {_.isEmpty(biography)
            ? `We don't have a biography for ${name}.`
            : biography.includes("\n")
            ? biography.slice(0, newLineIndex)
            : biography}
        </Typography>
        {biography.includes("\n") && (
          <Typography sx={{ mt: 3, color: blueGrey[300], fontWeight: 300 }}>
            {biography.slice(newLineIndex)}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
export default Biography;
