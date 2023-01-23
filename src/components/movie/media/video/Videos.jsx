import _ from "lodash";
import YouTube from "react-youtube";
import { Typography } from "@mui/material";

const Videos = ({ title, videos }) => {
  
  return (
    <>
      {_.isEmpty(videos) ? (
        <Typography sx={{ fontWeight: 300, color: "text.secondary" }}>{`
          No videos have been added to ${title}.
      `}</Typography>
      ) : (
        <div>Videos.jsx</div>
      )}
    </>
    // <YouTube videoId="" />
  );
};
export default Videos;
