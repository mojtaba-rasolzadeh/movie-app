import _ from "lodash";
import { grey } from "@mui/material/colors";
import { Box, Card, Typography } from "@mui/material";

import { ActorName, ActorAvatar, ActorCharacter } from "../constant/cast";
import { FullCastAndCrewButton } from "../constant/movie&tvShow";

const TopCast = ({ id, title, credits }) => {
  return (
    <Card sx={{ mt: 4, p: 3, borderRadius: "20px" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Top Cast
        </Typography>
        {credits?.cast?.length > 0 && (
          <FullCastAndCrewButton
            mediaType="movie"
            mediaId={id}
            mediaTitle={title}
          />
        )}
      </Box>
      {_.isEmpty(credits?.cast) ? (
        <Typography variant="body2" sx={{ fontWeight: 600, color: grey[600] }}>
          We don't have any cast added to this movie!
        </Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            mt: 2,
          }}
        >
          {credits?.cast.slice(0, 4).map((user) => (
            <Box
              key={user.id}
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
            >
              <ActorAvatar {...user} />
              <Box>
                <ActorName {...user} />
                <ActorCharacter character={user.character} />
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Card>
  );
};

export default TopCast;
