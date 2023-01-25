import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Avatar, Box, Card, CardActionArea, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { Loader } from "../../components/constant";
import { getMovie } from "../../services/MovieService";
import { Typography } from "@mui/material";

const CastAndCrew = () => {
  const { movieId } = useParams();

  const [loading, setLoading] = useState(false);
  const [castAndCrew, setCastAndCrew] = useState([]);

  console.log(castAndCrew && castAndCrew.cast);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { status, data } = await getMovie(parseInt(movieId));
        if (status === 200) {
          setLoading(false);
          setCastAndCrew(data.credits);
        }
      } catch (err) {
        setLoading(false);
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <Grid container sx={{my:5}}>
      <Grid xs={6}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="h5">Cast</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {castAndCrew.cast && castAndCrew.cast.length}
          </Typography>
        </Box>
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
      </Grid>
      <Grid xs={6}></Grid>
    </Grid>
  );
};

export default CastAndCrew;
