import { useState } from "react";
import _ from "lodash";
import { Box } from "@mui/material";

import { MediaScrollbar, ViewMoreButton } from "../../../constant";
import { PlayVideo, PlayVideoButton, VideoPoster } from "../trailersAndVideos";
import { ViewAllMedia, NoMediaMessage } from "./";

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
      {_.isEmpty(videos?.results) ? (<NoMediaMessage mediaType="videos" movieTitle={title} />) :
        (<MediaScrollbar width={videos?.results.length < 2 ? 610 : 1083}>
          {videos?.results.slice(0, 6).map((video) => (
            <Box key={video.id} sx={{ position: "relative" }}>
              <VideoPoster video={video} />
              <PlayVideoButton handleToggle={handleToggle} />
              <PlayVideo open={open} play={play} video={video} handleClose={handleClose} />
            </Box>
          ))}
          {videos.results.length > 6 && (
            <ViewMoreButton
              link={`/movie/${id}-${title?.split(/[\W]/)
                .join("-")
                .split("--")
                .join("-")
                .toLowerCase()}/videos`}
            />
          )}
        </MediaScrollbar>
        )}
      <ViewAllMedia movieId={id} movieTitle={title} link="videos" text="View All Videos" />
    </Box>
  );
};
export default Videos;
