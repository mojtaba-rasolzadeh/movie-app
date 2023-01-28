import _ from "lodash";
import { Avatar, Typography } from "@mui/material";
import { MediaScrollbar, ViewMoreButton } from "../../../constant";

const Posters = ({ id, title, images }) => {
  let width;

  if (images.posters && images.posters.length <= 2) {
    width = 610;
  } else if (images.posters && images.posters.length <= 6) {
    width = 640;
  } else {
    width = 1343;
  }

  return (
    <>
      {_.isEmpty(images) ? (
        <Typography sx={{ color: "text.secondary", fontWeight: 300 }}>
          {`No posters have been added to ${title}.`}
        </Typography>
      ) : (
        <MediaScrollbar width={width}>
          {images &&
            images.posters
              .slice(0, 6)
              .map((item, index) => (
                <Avatar
                  key={index}
                  variant="square"
                  sx={{ width: 200, height: 300 }}
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.file_path}`}
                />
              ))}
          {images && images.posters.length > 6 && (
            <ViewMoreButton
              link={`/movie/${id}-${
                title &&
                title
                  .split(/[\W]/)
                  .join("-")
                  .split("--")
                  .join("-")
                  .toLowerCase()
              }/images/posters`}
            />
          )}
        </MediaScrollbar>
      )}
    </>
  );
};

export default Posters;
