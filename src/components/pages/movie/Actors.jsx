import { Link } from "react-router-dom";
import {
  Box,
  Avatar,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Chip,
} from "@mui/material";
import { yellow } from "@mui/material/colors";

const Actors = ({ castAndCrew }) => {
  return (
    <>
      <Divider>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography variant="h5" sx={{ color: yellow[500] }}>
            Cast
          </Typography>
          <Chip
            label={castAndCrew.cast && castAndCrew.cast.length}
            color="error"
            size="small"
          />
        </Box>
      </Divider>
      {castAndCrew.cast &&
        castAndCrew.cast.map((cast) => (
          <Card key={cast.id} sx={{ display: "flex", mt: 2 }}>
            <CardActionArea sx={{ width: 66, borderRadius: 1 }}>
              <Link
                to={`/person/${cast.id}-${cast.name
                  .split(/[\s:,]/)
                  .join("-")
                  .split("--")
                  .join("-")
                  .toLowerCase()}`}
                style={{ textDecoration: "none" }}
              >
                <Avatar
                  variant="rounded"
                  sx={{ width: 66, height: 66 }}
                  src={`https://www.themoviedb.org/t/p/w66_and_h66_face${cast.profile_path}`}
                />
              </Link>
            </CardActionArea>
            <CardContent sx={{ p: "12px", paddingBottom: "8px!important" }}>
              <Link
                to={`/person/${cast.id}-${cast.name
                  .split(/[\s:,]/)
                  .join("-")
                  .split("--")
                  .join("-")
                  .toLowerCase()}`}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    letterSpacing: 1,
                    color: "#fff",
                    "&:hover": { color: "text.secondary" },
                  }}
                >
                  {cast.name}
                </Typography>
              </Link>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ letterSpacing: 1 }}
              >
                {cast.character}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </>
  );
};

export default Actors;
