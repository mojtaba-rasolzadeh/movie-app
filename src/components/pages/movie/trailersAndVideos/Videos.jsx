import { useState } from "react";
import { Box, Card, CardContent } from "@mui/material";

import { PlayVideoButton, PlayVideo, VideoDetails, VideoPoster, NoVideoMessage } from "./";

const Videos = ({ allVideos, videoType, moiveTitle }) => {

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
                ) : (<NoVideoMessage videoType={videoType} moiveTitle={moiveTitle} />)
            }
        </Box>
    );
}

export default Videos;