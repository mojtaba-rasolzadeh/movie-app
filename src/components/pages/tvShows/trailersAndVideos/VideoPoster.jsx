import { Avatar } from "@mui/material";

const VideoPoster = ({video}) => {
    return (
        <Avatar
            variant="square"
            sx={{ width: 350, height: 197 }}
            src={`https://i.ytimg.com/vi/${video.key}/hqdefault.jpg`}
        />
    );
}

export default VideoPoster;