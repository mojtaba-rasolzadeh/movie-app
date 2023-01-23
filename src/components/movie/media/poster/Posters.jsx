import { Avatar, Typography } from "@mui/material";
import _ from "lodash";

import { MediaScrollbar, ViewMoreButton } from "../../../constant";

const Posters = ({ title, posters }) => {
  return (
    <>
      {_.isEmpty(posters) ? (
        <Typography sx={{ fontWeight: 300, color: "text.secondary" }}>
          {`No posters have been added to ${title}.`}
        </Typography>
      ) : (
        <MediaScrollbar
          disableEqualOverflow={posters.length < 4 && "disableEqualOverflow"}
          width={posters.length < 4 && "500"}
        >
          {posters.slice(0, 9).map((poster, index) => (
            <Avatar
              variant="square"
              key={index}
              src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster.file_path}`}
              sx={{ width: 220, height: 330 }}
            />
          ))}
          {posters.length > 9 && <ViewMoreButton />}
        </MediaScrollbar>
      )}
    </>
  );
};

export default Posters;
