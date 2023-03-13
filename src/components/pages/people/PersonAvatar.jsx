import { Avatar } from "@mui/material";

const PersonAvatar = ({ profile_path }) => {
    return (
        <Avatar
            variant="rounded"
            sx={{  width: 1, height: 450 }}
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${profile_path}`}
        />
    );
}

export default PersonAvatar;