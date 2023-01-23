import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import { UserScore } from "../../constant";

const TvShows = ({ tvShowsData }) => {
  return (
    <>
      {tvShowsData.results !== undefined &&
        tvShowsData.results.map((tv) => (
          <Card key={tv.id} sx={{ maxWidth: 175 }}>
            <CardActionArea sx={{ maxWidth: 175, borderRadius: 1 }}>
              <Link to={`/tv/${tv.id}`} style={{ textDecoration: "none" }}>
                <Avatar
                  variant="rounded"
                  sx={{ width: 175, height: 262 }}
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${tv.poster_path}`}
                />
              </Link>
            </CardActionArea>
            <Box
              sx={{
                display: "inline-block",
                position: "relative",
                top: "-20px",
                left: "10px",
              }}
            >
              <UserScore vote_average={tv.vote_average} size={34} fSize={12} />
            </Box>
            <CardContent sx={{ position: "relative", top: "-26px" }}>
              <Link to={`/tv/${tv.id}`} style={{ textDecoration: "none" }}>
                <Typography
                  variant="body2"
                  sx={{
                    display: "inline-block",
                    color: "#fff",
                    "&:hover": { color: "text.secondary" },
                  }}
                  gutterBottom
                >
                  {tv.name}
                </Typography>
              </Link>
              <Typography
                component="div"
                variant="caption"
                color="text.secondary"
              >
                {new Date(tv.first_air_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </>
  );
};
export default TvShows;
