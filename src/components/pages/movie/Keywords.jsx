import { Link } from "react-router-dom";
import _ from "lodash";
import { Box, Typography, Chip } from "@mui/material";

const Keywords = ({ keywords }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="body1"
        sx={{
          letterSpacing: 2,
          fontWeight: "700",
          background: 'linear-gradient(to right,#ED4700,#E76F00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Keywords:
      </Typography>
      {_.isEmpty(keywords?.keywords) ? (
        <Typography variant="body2" sx={{ pl: 1 }}>
          No keywords have been added.
        </Typography>
      ) : (
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 2 }}>
          {keywords.keywords.map((keyword) => (
            <Link
              key={keyword.id}
              to={`/keyword/${keyword.id}-${keyword?.name
                .split(" ")
                .join("-")
                .split("--")
                .join("-")
                .toLowerCase()
                }/movie`}
              style={{ textDecoration: "none" }}
            >
              <Chip label={keyword.name} clickable />
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Keywords;
