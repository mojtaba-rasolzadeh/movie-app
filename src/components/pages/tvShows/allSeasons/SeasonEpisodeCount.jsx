import { Typography } from "@mui/material";

const SeasonEpisodeCount = ({ season }) => {
  return (
    <Typography variant="body2" gutterBottom>
      {`${season?.air_date?.substring(0, 4)} | ${
        season?.episode_count
      } Episodes`}
    </Typography>
  );
};

export default SeasonEpisodeCount;
