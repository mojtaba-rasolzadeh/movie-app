import { useState } from "react";
import { Box, Card, CardContent } from "@mui/material";

import PlayVideoButton from "./PlayVideoButton";
import VideoPoster from "./VideoPoster";
import PlayVideo from "./PlayVideo";
import VideoDetails from "./VideoDetails";
import NoVideoMessage from "./NoVideoMessage";

const Videos = ({ allVideos, videoType, mediaTitle }) => {

    const filtredVideos = allVideos.filter(video => video.type === videoType);

    const [open, setOpen] = useState(false);
    const [play, setPlay] = useState(false);

    const handleClose = () => {
        setOpen(false);
        setPlay(false);
    };

    const handleToggle = () => {
        setPlay(true);
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {
                filtredVideos.length > 0 ? (
                    filtredVideos.map(video => (
                        <Card
                            key={video.id}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: 350
                            }}>
                            <Box sx={{ position: "relative" }}>
                                <VideoPoster video={video} />
                                <PlayVideoButton handleToggle={handleToggle} />
                                <PlayVideo open={open} handleClose={handleClose} play={play} video={video} />
                            </Box>
                            <CardContent>
                                <VideoDetails video={video} />
                            </CardContent>
                        </Card>
                    ))
                ) : (<NoVideoMessage videoType={videoType} mediaTitle={mediaTitle} />)
            }
        </Box>
    );
}

export default Videos;