import _ from "lodash";
import { Box, Chip, Typography } from "@mui/material";
import { teal, yellow } from "@mui/material/colors";

import Review from "./Review";

const Social = ({ id, title, reviews }) => {
  return (
    <Box sx={{ width: "100%", my: 4 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          my: 3,
        }}
      >
        <Typography variant="h5" sx={{ color: teal[500] }}>
          Social
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Typography sx={{ color: yellow[700] }}>Reviews </Typography>
          <Chip
            label={
              <Typography
                variant="caption"
                component="span"
                color="text.secondary"
                sx={{ fontWeight: "700" }}
              >
                {reviews && reviews.results.length}
              </Typography>
            }
            color="error"
            size="small"
            sx={{ px: 0.75 }}
          />
        </Box>
      </Box>
      {reviews && _.isEmpty(reviews.results) ? (
        <Typography
          color="text.secondary"
          sx={{ fontWeight: "300", letterSpacing: 1 }}
        >
          {` We don't have any reviews for ${title}.`}
        </Typography>
      ) : (
        <Review movieId={id} movieTitle={title} reviews={reviews} />
      )}
    </Box>
  );
};

export default Social;
