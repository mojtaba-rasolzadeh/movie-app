import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Avatar,
} from "@mui/material";
import { blueGrey, grey, lime } from "@mui/material/colors";

const TvGenres = ({ id, poster_path, name, first_air_date, overview }) => {
  console.log( first_air_date)
  return (
    <Card sx={{ display: "flex", my: 3, height: 141 }}>
      <CardActionArea sx={{ width: 94 }}>
        <Link to={`/tv/${id}`} style={{ textDecoration: "none" }}>
          <Avatar
            variant="square"
            sx={{ width: 94, height: 141 }}
            src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2${poster_path}`}
            alt={name}
          />
        </Link>
      </CardActionArea>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Link to={`/tv/${id}`} style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                display: "inline",
                fontSize: "1.20rem",
                fontWeight: 700,
                color: lime[500],
                "&:hover": { color: lime[700] },
              }}
            >
              {name}
            </Typography>
          </Link>
          <Typography
            component="p"
            variant="caption"
            sx={{ color: blueGrey[500] }}
          >
            {new Date(first_air_date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 1,
              color: grey[500],
              fontWeight: 300,
              display: " -webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {overview}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
export default TvGenres;
