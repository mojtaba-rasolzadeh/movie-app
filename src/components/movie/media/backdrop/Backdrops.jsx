import { Avatar, Typography } from "@mui/material";
import _ from "lodash";

import { MediaScrollbar, ViewMoreButton } from "../../../constant";

const Backdrops = ({ backdrops, title }) => {
  return (
    <>
      {_.isEmpty(backdrops) ? (
        <Typography sx={{ color: "text.secondary", fontWeight: 300 }}>
          {`No backdrops have been added to ${title}.`}
        </Typography>
      ) : (
        <MediaScrollbar>
          {backdrops.slice(0, 6).map((backdrop, index) => (
            <Avatar
              key={index}
              variant="square"
              sx={{ width: 533, height: 300 }}
              src={`https://image.tmdb.org/t/p/w533_and_h300_bestv2${backdrop.file_path}`}
            />
          ))}
          {backdrops.length > 6 && <ViewMoreButton />}
        </MediaScrollbar>
      )}
    </>
  );
};

export default Backdrops;
