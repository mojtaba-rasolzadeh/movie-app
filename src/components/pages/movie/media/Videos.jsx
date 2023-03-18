import { useState } from "react";
import _ from "lodash";
import { Box, ImageList, ImageListItem } from "@mui/material";

import { PlayVideo, PlayVideoButton } from "../trailersAndVideos";
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
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
      {_.isEmpty(videos?.results) ? (<NoMediaMessage mediaType="videos" movie Title={title} />) :
        <ImageList cols={2} gap={8}>
          {videos.results?.slice(0, 6).map((video) => (
            <ImageListItem key={video.id} sx={{ position: "relative" }}>
              <img
                src={`https://i.ytimg.com/vi/${video.key}/hqdefault.jpg?w=161&fit=crop&auto=format`}
                srcSet={`https://i.ytimg.com/vi/${video.key}/hqdefault.jpg?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={video.file_path}
                loading="lazy"
              />
              <PlayVideoButton handleToggle={handleToggle} />
              <PlayVideo open={open} play={play} video={video} handleClose={handleClose} />
            </ImageListItem>
          ))}
        </ImageList>
      }
      <ViewAllMedia movieId={id} movieTitle={title} link="videos" text="View All Videos" />
    </Box>
  );
};
export default Videos;