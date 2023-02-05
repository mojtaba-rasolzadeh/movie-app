import _ from "lodash";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Link,
} from "@mui/material";

import { MediaScrollbar } from "../../constant";
import { teal } from "@mui/material/colors";

const Recommendations = ({ name, recommendations }) => {
    return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ color: teal[500] }}>
        Recommendations
      </Typography>
      {_.isEmpty(recommendations && recommendations.results) ? (
        <Typography sx={{ fontSize: ".89rem", color: "text.secondary" }}>
          {`We don't have enough data to suggest any tvShows based on ${name}. You can help by rating movies you've seen.`}
        </Typography>
      ) : (
        <MediaScrollbar gap={2}>
          {recommendations &&
            recommendations.results.map((item) => (
              <Card key={item.id} sx={{ minWidth: 250, width: 250, mt: 3 }}>
                <CardActionArea sx={{ borderRadius: 1 }}>
                  <Link
                    href={`/tv/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Avatar
                      variant="rounded"
                      sx={{ width: 250, height: 141 }}
                      src={`https://www.themoviedb.org/t/p/w250_and_h141_face${item.backdrop_path}`}
                    />
                  </Link>
                </CardActionArea>
                <CardContent sx={{ p: 1.5, pb: "12px!important" }}>
                  <Link
                    href={`/tv/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#fff",
                        "&:hover": { color: "text.secondary" },
                      }}
                    >
                      {item.name.length > 25
                        ? `${item.name.slice(0, 25)}... `
                        : item.name}
                    </Typography>
                  </Link>
                </CardContent>
              </Card>
            ))}
        </MediaScrollbar>
      )}
    </Box>
  );
};

export default Recommendations;
