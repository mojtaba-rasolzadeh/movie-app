import { useState } from "react";
import _ from "lodash";
import { Box, Typography, Avatar, IconButton, Backdrop } from "@mui/material";
import { Close, PlayArrowRounded } from "@mui/icons-material";
import { orange } from "@mui/material/colors";
import Youtube from "react-youtube";

import { MediaScrollbar, ViewMoreButton } from "../../../constant";

const Videos = ({ id, title, videos }) => {
  const [open, setOpen] = useState(false);
  const [play, setPlay] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setPlay(false);
  };

  const handleToggle = () => {
    setPlay(true);
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Box>
      {_.isEmpty(videos && videos.results) ? (
        <Typography sx={{ color: "text.secondary", fontWeight: 300 }}>
          {`No videos have been added to ${title}.`}
        </Typography>
      ) : (
        <MediaScrollbar
          width={videos && videos.results.length < 2 ? 610 : 1083}
        >
          {videos &&
            videos.results.slice(0, 6).map((item) => (
              <Box key={item.id} sx={{ position: "relative" }}>
                <Avatar
                  variant="square"
                  sx={{ width: 533, height: 300 }}
                  src={`https://i.ytimg.com/vi/${item.key}/hqdefault.jpg`}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    color: "#fff",
                    ":hover": { color: orange[500] },
                  }}
                  onClick={handleToggle}
                >
                  <PlayArrowRounded
                    sx={{
                      fontSize: "60px",
                    }}
                  />{" "}
                </IconButton>{" "}
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={open}
                  onClick={handleClose}
                >
                  {play && (
                    <Box sx={{ position: "relative" }}>
                      <IconButton
                        sx={{
                          position: "absolute",
                          top: "-40px",
                          right: "0",
                        }}
                      >
                        <Close />
                      </IconButton>
                      <Youtube
                        videoId={item.key}
                        title={"hello mojooo"}
                        opts={{
                          width: "640",
                          height: "390",
                          playerVars: {
                            controls: 1,
                          },
                        }}
                      />
                    </Box>
                  )}
                </Backdrop>{" "}
              </Box>
            ))}
          {videos && videos.results.length > 6 && (
            <ViewMoreButton
              link={`/movie/${id}-${title
                .split(/[\W]/)
                .join("-")
                .split("--")
                .join("-")
                .toLowerCase()}/videos`}
            />
          )}
        </MediaScrollbar>
      )}
    </Box>
  );
};
export default Videos;
