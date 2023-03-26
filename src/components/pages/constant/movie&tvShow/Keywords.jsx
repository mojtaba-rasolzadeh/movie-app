import { Link } from "react-router-dom";
import _ from "lodash";
import { Box, Typography, Chip } from "@mui/material";
import { grey } from "@mui/material/colors";

const Keywords = ({ keywords, mediaType }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="body1" sx={{ letterSpacing: 1 }}>
        Keywords:
      </Typography>
      {_.isEmpty(keywords) ? (
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            color: grey[600],
          }}
        >
          No keywords have been added.
        </Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
            mt: 2,
          }}
        >
          {keywords.map((keyword) => (
            <Link
              key={keyword.id}
              to={`/keyword/${keyword.id}-${keyword?.name
                .split(" ")
                .join("-")
                .split("--")
                .join("-")
                .toLowerCase()}/${mediaType}`}
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
