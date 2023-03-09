import { Box, IconButton, Backdrop } from "@mui/material";
import { Close } from "@mui/icons-material";
import Youtube from "react-youtube";

const PlayVideo = ({ open, handleClose, play, video }) => {
    return (
        <Backdrop
            sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={open}
            onClick={handleClose}
        >
            {play && (
                <Box sx={{ position: "relative" }}>
                    <IconButton
                        sx={{
                            position: "absolute",
                            top: "-40px",
                            right: "0",
                        }}
                    >
                        <Close />
                    </IconButton>
                    <Youtube
                        videoId={video.key}
                        title={"hello mojooo"}
                        opts={{
                            width: "640",
                            height: "390",
                            playerVars: {
                                controls: 1,
                            },
                        }}
                    />
                </Box>
            )}
        </Backdrop>
    );
}

export default PlayVideo;