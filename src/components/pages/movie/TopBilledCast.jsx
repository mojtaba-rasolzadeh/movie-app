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
import { orange, teal, yellow } from "@mui/material/colors";

const TopBilledCast = ({ id, title, credits }) => {
  return (
    <>
      {credits && _.isEmpty(credits.cast) ? (
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
          <Typography variant="h5" gutterBottom sx={{ color: teal[500] }}>
            Top Billed Cast
          </Typography>
          <MediaScrollbar
            gap={2}
            width={credits && credits.cast.length < 9 && 1232}
          >
            {credits !== undefined &&
              credits.cast.slice(0, 9).map((item) => (
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
                        variant="body2"
                        sx={{
                          letterSpacing: 1,
                          color: "#fff",
                          "&:hover": { color: "text.secondary" },
                        }}
                        gutterBottom
                      >
                        {item.name}
                      </Typography>
                    </Link>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        letterSpacing: 1,
                      }}
                    >
                      {item.character}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            {credits !== undefined && credits.cast.length > 9 && (
              <ViewMoreButton
                link={`/movie/${id}-${
                  title &&
                  title
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
              to={`/movie/${id}-${
                title &&
                title
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
                  // color: orange[700],
                  color: "#fff",
                  // "&:hover": { color: orange[600] },
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

export default TopBilledCast;
