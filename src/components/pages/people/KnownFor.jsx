import {
  Box,
  Avatar,
  Typography,
  Link,
  CardActionArea,
  Card,
  CardContent,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { MediaScrollbar } from "../../constant";

const KnownFor = ({ combined_credits }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Known For
      </Typography>
      <MediaScrollbar width={714} gap={2}>
        {combined_credits &&
          combined_credits.cast.slice(0, 9).map((movie) => (
            <Card key={movie.id} sx={{ minWidth: 130, width: 130 }}>
              <CardActionArea sx={{ borderRadius: 1 }}>
                <Link
                  href={`/${movie.media_type === "tv" ? "tv" : "movie"}/${
                    movie.id
                  }`}
                >
                  <Avatar
                    variant="rounded"
                    sx={{ width: 130, height: 195 }}
                    src={`https://image.tmdb.org/t/p/w150_and_h225_bestv2${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
              </CardActionArea>
              <CardContent sx={{ p: "12px", paddingBottom: "12px!important" }}>
                <Link
                  href={`/${movie.media_type === "tv" ? "tv" : "movie"}/${
                    movie.id
                  }`}
                  underline="none"
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      display: "inline-block",
                      color: "#fff",
                      "&:hover": {
                        color: "text.secondary",
                      },
                    }}
                  >
                    {movie.media_type === "tv" ? movie.name : movie.title}
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          ))}
      </MediaScrollbar>
    </Box>
  );
};
export default KnownFor;
