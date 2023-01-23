import { Link } from "react-router-dom";
import _ from "lodash";
import {
  Avatar,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Chip,
} from "@mui/material";
import { MediaScrollbar } from "../../constant";
import { teal, yellow } from "@mui/material/colors";

const Recommendations = ({ title, recommendations }) => {
  return (
    <Box sx={{ my: 5 }}>
      <Typography variant="h5" sx={{ mb: 3, color: "cadetblue" }}>
        Recommendations
      </Typography>
      {_.isEmpty(recommendations) ? (
        <Typography sx={{ fontSize: ".89rem", color: "text.secondary" }}>
          {`We don't have enough data to suggest any movies based on ${title}. You can help by rating movies you've seen.`}
        </Typography>
      ) : (
        <MediaScrollbar gap={3} width={recommendations.length <= 3 && 678}>
          {recommendations.map((recommendation) => (
            <Card key={recommendation.id} sx={{ minWidth: 250, width: 250 }}>
              <CardActionArea sx={{ borderRadius: 1 }}>
                <Link to={`/movie/${recommendation.id}-${recommendation.title}`}>
                  <Avatar
                    variant="rounded"
                    sx={{
                      width: 250,
                      height: 141,
                    }}
                    src={`https://image.tmdb.org/t/p//w250_and_h141_face${recommendation.backdrop_path}`}
                    alt={recommendation.title}
                  />
                </Link>
              </CardActionArea>
              <CardContent sx={{ p: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Link
                    to={`/movie/${recommendation.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {recommendation.title.length <= 21 ? (
                      <Typography
                        variant="body2"
                        sx={{
                          color: teal[500],
                          "&:hover": { color: teal[300] },
                        }}
                      >
                        {recommendation.title}
                      </Typography>
                    ) : (
                      <Typography
                        variant="body2"
                        sx={{
                          color: teal[500],
                          "&:hover": { color: teal[300] },
                        }}
                      >
                        {`${recommendation.title.slice(0, 21)}...`}
                      </Typography>
                    )}
                  </Link>
                  <Chip
                    label={
                      <Typography variant="caption">
                        {parseInt(
                          recommendation.vote_average
                            .toFixed(1)
                            .split(".")
                            .join("")
                        )}
                        %
                      </Typography>
                    }
                    color="error"
                    size="small"
                  />
                </Box>
              </CardContent>
            </Card>
            // <Avatar
            //   key={recommendation.id}
            //   variant="rounded"
            //   sx={{ width: 250, height: 141 }}
            //   src={`https://image.tmdb.org/t/p//w250_and_h141_face${recommendation.backdrop_path}`}
            // />
          ))}
        </MediaScrollbar>
      )}
    </Box>
  );
};
export default Recommendations;
