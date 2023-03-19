import _ from "lodash";
import { Box, ImageList, ImageListItem } from "@mui/material";

import { ViewAllMedia, NoMediaMessage } from "./";

const Backdrops = ({ id, title, images }) => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
      {_.isEmpty(images.backdrops) ? (<NoMediaMessage mediaType="backdrops" tvShowTitle={title} />
      ) : (
        <ImageList cols={2} gap={8}>
          {images.backdrops?.slice(0, 4).map((item) => (
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
      <ViewAllMedia tvShowId={id} tvShowTitle={title} link="images/backdrops" text="View All Backdrops" />
    </Box>
  );
};

export default Backdrops;