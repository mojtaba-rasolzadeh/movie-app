import { Link } from "react-router-dom";
import _ from "lodash";
import {
  Box,
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

import { MediaScrollbar, ViewMoreButton } from "../../../components/constant";
import { teal } from "@mui/material/colors";

const SeriesCast = ({ id, name, aggregate_credits }) => {
  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ color: teal[500] }}>
        Series Cast
      </Typography>
      {aggregate_credits && _.isEmpty(aggregate_credits.cast) ? (
        <Box>
          <Typography color="text.secondary">
            We don't have any cast added to this tv. You can help by adding
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
          <MediaScrollbar
            gap={2}
            width={aggregate_credits && aggregate_credits.cast.length < 9 && 1232}
          >
            {aggregate_credits !== undefined &&
              aggregate_credits.cast.slice(0, 9).map((item) => (
                <Card key={item.id} sx={{ maxWidth: 138, mt: 3 }}>
                  <CardActionArea sx={{ width: 138, borderRadius: 1 }}>
                    <Link
                      to={`/person/${item.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Avatar
                        variant="rounded"
                        sx={{ width: 138, height: 175 }}
                        src={`https://www.themoviedb.org/t/p/w138_and_h175_face${item.profile_path}`}
                      />
                    </Link>
                  </CardActionArea>
                  <CardContent
                    sx={{
                      p: 1.5,
                      "&:last-child": {
                        paddingBottom: 1.5,
                      },
                    }}
                  >
                    <Link
                      to={`/person/${item.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight:'700',
                          letterSpacing: 1,
                          color: "#fff",
                          "&:hover": { color: "text.secondary" },
                        }}
                        gutterBottom
                      >
                        {item.name}
                      </Typography>
                    </Link>
                    {
                      item && item.roles.map((cast, index) => (
                        <>
                          <Typography
                            key={index}
                            variant="body2"
                            sx={{ fontWeight: "300", letterSpacing: 1 }}
                          >
                            {cast.character}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ fontWeight: '300', letterSpacing: 1 }}>
                            {cast.episode_count} Episodes
                          </Typography>
                        </>
                      ))
                    }

                  </CardContent>
                </Card>
              ))}
            {aggregate_credits !== undefined && aggregate_credits.cast.length > 9 && (
              <ViewMoreButton
                link={`/tv/${id}-${name &&
                  name
                    .split(/[\s:,]/)
                    .join("-")
                    .split("--")
                    .join("-")
                    .toLowerCase()
                  }/cast`}
              />
            )}
          </MediaScrollbar>
          <Box
            sx={{
              my: 3,
            }}
          >
            <Link
              to={`/tv/${id}-${name &&
                name
                  .split(/[\s:,]/)
                  .join("-")
                  .split("--")
                  .join("-")
                  .toLowerCase()
                }/cast`}
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  display: "inline-block",
                  fontWeight: "600",
                  color: "#fff",
                  "&:hover": { color: "text.secondary" },
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

export default SeriesCast;