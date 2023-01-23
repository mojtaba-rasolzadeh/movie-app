import { Link } from "react-router-dom";
import _ from "lodash";
import { Box, Typography } from "@mui/material";
import { amber, teal, yellow } from "@mui/material/colors";

import { CreditsMovie } from "../";
import { MediaScrollbar, ViewMoreButton } from "../../constant";

const TopCast = ({ viewMore, credits }) => {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 3, color: "cadetblue" }}>
        Top Billed Cast
      </Typography>
      {viewMore ? (
        ""
      ) : _.isEmpty(credits.cast) ? (
        <Box>
          <Typography color="text.secondary">
            We don't have any cast added to this movie. You can help by adding
            some!
          </Typography>
          <Box
            sx={{
              my: 3,
            }}
          >
            <Link to="#" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  letterSpacing: 1,
                  fontWeight: "600",
                  color: "#fff",
                  "&:hover": { color: "text.secondary" },
                }}
              >
                Add Missing Cast & Crew
              </Typography>
            </Link>
          </Box>
        </Box>
      ) : (
        <>
          <MediaScrollbar gap={2}>
            {credits.cast.slice(0, 9).map((actor) => (
              <CreditsMovie key={actor.id} {...actor} />
            ))}
            {credits.cast.length > 6 && <ViewMoreButton />}
          </MediaScrollbar>
          <Box
            sx={{
              my: 3,
            }}
          >
            <Link to="#" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  fontWeight: "600",
                  color: yellow[700],
                  "&:hover": { color: yellow[600] },
                }}
              >
                Full Cast & Crew
              </Typography>
            </Link>
          </Box>
        </>
      )}
    </>
  );
};
export default TopCast;
