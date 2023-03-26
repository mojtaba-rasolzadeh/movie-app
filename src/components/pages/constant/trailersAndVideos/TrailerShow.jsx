import { Box, Backdrop, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import Youtube from "react-youtube";

const TrailerShow = ({ open, handleClose, trailer, play }) => {
    return (
        <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
        >
            {trailer && play && (
                <Box sx={{ position: "relative" }}>
                    <IconButton sx={{ position: "absolute", top: "-40px", right: 0 }}>
                        <Close />
                    </IconButton>
                    <Youtube
                        videoId={trailer.key}
                        opts={{
                            width: "640",
                            height: "390",
                            playerVars: {
                                controls: 1,
                            },
                        }}
                    />
                </Box>
            )}{" "}
        </Backdrop>
    );
}

export default TrailerShow;