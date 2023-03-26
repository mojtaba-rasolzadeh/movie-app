import { Avatar } from "@mui/material";

const PersonAvatar = ({ profile_path }) => {
  return (
    <Avatar
      variant="rounded"
      sx={{
        width: { xs: 1, sm: 300, md: 1 },
        height: 450,
        borderRadius: "20px",
      }}
      src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${profile_path}`}
    />
  );
};

export default PersonAvatar;
