import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import {
  Box,
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Fade,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";

import { Loader, MediaScrollbar } from "../../../constant";
import { UserScore } from "../../../movie";

const OnTv = ({ onTvItems }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <>
      {_.isEmpty(onTvItems.results) ? (
        <Loader height="390px" />
      ) : (
        <MediaScrollbar gap={2}>
          {onTvItems.results.map((item) => (
            <Fade in={loading} key={item.id}>
              <Card sx={{ minWidth: 150, width: 150, mt: 3 }}>
                <CardActionArea sx={{ borderRadius: 1 }}>
                  <Link to={`tv/${item.id}`} style={{ textDecoration: "none" }}>
                    <Avatar
                      variant="rounded"
                      src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                      sx={{ width: 1, height: 225 }}
                    />
                  </Link>
                </CardActionArea>
                <Box
                  sx={{
                    display: "inline-block",
                    position: "relative",
                    top: "-1.2rem",
                    mx: 1,
                  }}
                >
                  <UserScore
                    vote_average={item.vote_average}
                    size={32}
                    fSize=".75rem"
                    sx={{ mx: 1 }}
                  />
                </Box>
                <CardContent sx={{ mt: -3, p: 1 }}>
                  <Link to={`tv/${item.id}`} style={{ textDecoration: "none" }}>
                    <Typography
                      variant="subtitle2"
                      component="div"
                      sx={{
                        display: "inline-block",
                        letterSpacing: 1,
                        color: "#fff",
                        "&:hover": { color: blueGrey[300] },
                      }}
                      gutterBottom
                    >
                      {item.name}
                    </Typography>
                  </Link>
                  <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                  >
                    {new Date(item.first_air_date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          ))}
        </MediaScrollbar>
      )}
    </>
  );
};
export default OnTv;
