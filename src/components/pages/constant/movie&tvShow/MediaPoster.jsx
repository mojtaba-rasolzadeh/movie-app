import { Avatar } from "@mui/material";

const MediaPoster = ({ title, posterPath }) => {
  return (
    <Avatar
      variant="rounded"
      sx={{
        display: "flex",
        width: { xs: 300, md: 1 },
        height: 450,
        borderRadius: "20px",
        mt: { xs: 4, sm: 0 },
      }}
      src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${posterPath}`}
      alt={title}
    />
  );
};

export default MediaPoster;
