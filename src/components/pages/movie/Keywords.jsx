import _ from "lodash";
import { Box, Typography, Chip } from "@mui/material";
import { lime } from "@mui/material/colors";

const Keywords = ({ keywords }) => {
  console.log(keywords);
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="body1"
        sx={{ letterSpacing: 2, fontWeight: "700", color: lime[500] }}
      >
        Keywords
      </Typography>
      {_.isEmpty(keywords && keywords.keywords) ? (
        <Typography variant="body2" sx={{ color: lime[100] }}>
          No keywords have been added.
        </Typography>
      ) : (
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 2 }}>
          {keywords.keywords.map((keyword) => (
            <Chip
              key={keyword.id}
              label={keyword.name}
              component="a"
              href={`/keyword/${keyword.id}-${
                keyword.name &&
                keyword.name
                  .split(" ")
                  .join("-")
                  .split("--")
                  .join("-")
                  .toLowerCase()
              }/movie`}
              clickable
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Keywords;
