import { Avatar } from "@mui/material";

const ActorAvatar = ({ profile_path }) => {
  return (
    <Avatar
      sx={{ width: 64, height: 64 }}
      src={`https://image.tmdb.org/t/p/w64_and_h64_face${profile_path}`}
    />
  );
};

export default ActorAvatar;
