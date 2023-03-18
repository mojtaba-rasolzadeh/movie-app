import _ from "lodash";
import { Box, ImageList, ImageListItem } from "@mui/material";

import { ViewAllMedia, NoMediaMessage } from "./";

const Posters = ({ id, title, images }) => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
      {_.isEmpty(images.posters) ? (<NoMediaMessage mediaType="posters" movieTitle={title} />) : (
        <ImageList cols={3} gap={8}>
          {images.posters?.slice(0, 9).map((item) => (
            <ImageListItem key={item.file_path}>
              <img
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.file_path}?w=248&fit=crop&auto=format`}
                srcSet={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.file_path}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.file_path}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
      <ViewAllMedia movieId={id} movieTitle={title} link="images/posters" text="View All Posters" />
    </Box>
  );
};

export default Posters;