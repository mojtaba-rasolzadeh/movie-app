import _ from "lodash";
import { Box, Typography, Card } from "@mui/material";
import { grey } from "@mui/material/colors";

import { FullCastAndCrewButton } from "../constant/movie&tvShow";
import { ActorAvatar, ActorName, ActorCharacter } from "../constant/cast";

const SeriesCast = ({ id, name, aggregate_credits }) => {
  return (
    <Card sx={{ mt: 4, p: 3, borderRadius: "20px" }}>
      {_.isEmpty(aggregate_credits?.cast) ? (
        <Typography sx={{ fontWeight: 600, color: grey[600] }}>
          We don't have any cast added to this movie!
        </Typography>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Series Cast
            </Typography>
            <FullCastAndCrewButton
              mediaType="tv"
              mediaId={id}
              mediaTitle={name}
            />
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 1.5, mt: 2 }}
          >
            {aggregate_credits?.cast.slice(0, 4).map((user) => (
              <Box
                key={user.id}
                sx={{ display: "flex", alignItems: "center", gap: 2 }}
              >
                <ActorAvatar {...user} />
                <Box>
                  <ActorName {...user} />
                  {user?.roles.map((cast, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <ActorCharacter character={cast.character} />
                      <Typography
                        variant="caption"
                        sx={{ letterSpacing: 1, color: grey[600] }}
                      >
                        {cast.episode_count} Episodes
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </>
      )}
    </Card>
  );
};

export default SeriesCast;
