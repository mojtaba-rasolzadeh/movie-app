import { IconButton } from "@mui/material";
import { PlayArrowRounded } from "@mui/icons-material";

const PlayVideoButton = ({ handleToggle }) => {
    return (
        <IconButton
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                color: "#fff",
                ":hover": { color: '#ff004d' },
            }}
            onClick={handleToggle}
        >
            <PlayArrowRounded sx={{ fontSize: "60px" }} />{" "}
        </IconButton>
    );
}

export default PlayVideoButton;