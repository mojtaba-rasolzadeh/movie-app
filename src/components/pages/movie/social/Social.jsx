import _ from "lodash";
import { Box, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";

import { ReviewsLength, Review } from "./";

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
        <Typography variant="h5">
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
          <Typography
            sx={{
              color: yellow[700],
              letterSpacing: 1,
            }}>Reviews </Typography>
          <ReviewsLength reviews={reviews} />
        </Box>
      </Box>
      {_.isEmpty(reviews?.results) ? (
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
