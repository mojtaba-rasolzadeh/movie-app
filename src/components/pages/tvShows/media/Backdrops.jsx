import _ from "lodash";
import { Avatar, Typography } from "@mui/material";
import { MediaScrollbar, ViewMoreButton } from "../../../constant";

const Backdrops = ({ id, name, images }) => {
  let width;

  if (images.backdrops && images.backdrops.length <= 1) {
    width = 610;
  } else if (images.backdrops && images.backdrops.length < 6) {
    width = 1100;
  } else {
    width = 1343;
  }
  return (
    <>
      {_.isEmpty(images.backdrops) ? (
        <Typography sx={{ color: "text.secondary", fontWeight: 300 }}>
          {`No backdrops have been added to ${name}.`}
        </Typography>
      ) : (
        <MediaScrollbar width={width}>
          {images &&
            images.backdrops
              .slice(0, 6)
              .map((item, index) => (
                <Avatar
                  key={index}
                  variant="square"
                  sx={{ width: 533, height: 300 }}
                  src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${item.file_path}`}
                />
              ))}
          {images && images.backdrops.length > 6 && (
            <ViewMoreButton
              link={`/tv/${id}-${
                name &&
                name
                  .split(/[\W]/)
                  .join("-")
                  .split("--")
                  .join("-")
                  .toLowerCase()
              }/images/backdrops`}
            />
          )}
        </MediaScrollbar>
      )}
    </>
  );
};

export default Backdrops;
