import { Link } from "react-router-dom";
import _ from "lodash";
import { Avatar, Box, Card, CardActionArea, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const TopCast = ({ id, title, credits }) => {

  return (
    <>
      {_.isEmpty(credits?.cast) ? (
        <Box>
          <Typography sx={{ fontWeight: 600, color: grey[600] }}>
            We don't have any cast added to this movie!
          </Typography>
        </Box>
      ) : (
        <Card sx={{ mt: 4, p: 3, borderRadius: '20px' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" gutterBottom>Top Cast</Typography>
            <Link
              to={`/movie/${id}-${title?.split(/[\s:,]/)
                .join("-")
                .split("--")
                .join("-")
                .toLowerCase()
                }/cast`}
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{
                  display: "inline-block",
                  fontWeight: "600",
                  color: "#fff",
                  "&:hover": { color: grey[600] },
                }}
              >
                Full Cast & Crew
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 2 }}>
            {
              credits?.cast.slice(0, 4).map((user) => (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CardActionArea sx={{ width: 64, height: 64, borderRadius: '50%' }}>
                    <Link
                      to={`/person/${user.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Avatar sx={{ width: 64, height: 64 }}
                        src={`https://image.tmdb.org/t/p/w64_and_h64_face${user.profile_path}`} />
                    </Link>
                  </CardActionArea>
                  <Box>
                    <Link
                      to={`/person/${user.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          letterSpacing: 1,
                          color: "#fff",
                          "&:hover": { color: grey[600] },
                        }}
                      >
                        {user.name}
                      </Typography>
                    </Link>
                    <Typography
                      variant="caption"
                      sx={{
                        letterSpacing: 1,
                        fontWeight: 700, color: grey[600]
                      }}
                    >
                      {user.character}
                    </Typography>
                  </Box>
                </Box>
              ))
            }
          </Box>
        </Card>
      )}
    </>
  );
};

export default TopCast;