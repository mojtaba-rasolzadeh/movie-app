import { useState } from "react";
import { Box, Card, CardContent } from "@mui/material";

import { PlayVideoButton, PlayVideo, VideoDetails, VideoPoster, NoVideoMessage } from "./";

const Videos = ({ allVideos, videoType, tvTitle }) => {

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
                ) : (<NoVideoMessage videoType={videoType} tvTitle={tvTitle} />)
            }
        </Box>
    );
}

export default Videos;



// import { useState } from "react";
// import { Box, Typography, Avatar, Link, IconButton, Backdrop, Card, CardContent } from "@mui/material";
// import { Close, PlayArrowRounded } from "@mui/icons-material";
// import { orange } from "@mui/material/colors";
// import Youtube from "react-youtube";

// const Videos = ({ allVideos, videoType, tvTitle }) => {

//     const filtredVideos = allVideos.filter(video => video.type === videoType);

//     const [open, setOpen] = useState(false);
//     const [play, setPlay] = useState(false);

//     const handleClose = () => {
//         setOpen(false);
//         setPlay(false);
//     };

//     const handleToggle = () => {
//         setPlay(true);
//         setOpen((prevOpen) => !prevOpen);
//     };

//     return (
//         <>
//             {
//                 filtredVideos.length > 0 ? (
//                     filtredVideos.map(video => (
//                         <Card key={video.id} sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, width: { xs: 350, lg: 'auto' }, mb: 5 }}>
//                             <Box sx={{ position: "relative" }}>
//                                 <Avatar
//                                     variant="square"
//                                     sx={{ width: 350, height: 197 }}
//                                     src={`https://i.ytimg.com/vi/${video.key}/hqdefault.jpg`}
//                                 />
//                                 <IconButton
//                                     sx={{
//                                         position: "absolute",
//                                         top: "50%",
//                                         left: "50%",
//                                         transform: "translate(-50%,-50%)",
//                                         color: "#fff",
//                                         ":hover": { color: orange[500] },
//                                     }}
//                                     onClick={handleToggle}
//                                 >
//                                     <PlayArrowRounded
//                                         sx={{
//                                             fontSize: "60px",
//                                         }}
//                                     />{" "}
//                                 </IconButton>{" "}
//                                 <Backdrop
//                                     sx={{
//                                         color: "#fff",
//                                         zIndex: (theme) => theme.zIndex.drawer + 1,
//                                     }}
//                                     open={open}
//                                     onClick={handleClose}
//                                 >
//                                     {play && (
//                                         <Box sx={{ position: "relative" }}>
//                                             <IconButton
//                                                 sx={{
//                                                     position: "absolute",
//                                                     top: "-40px",
//                                                     right: "0",
//                                                 }}
//                                             >
//                                                 <Close />
//                                             </IconButton>
//                                             <Youtube
//                                                 videoId={video.key}
//                                                 title={"hello mojooo"}
//                                                 opts={{
//                                                     width: "640",
//                                                     height: "390",
//                                                     playerVars: {
//                                                         controls: 1,
//                                                     },
//                                                 }}
//                                             />
//                                         </Box>
//                                     )}
//                                 </Backdrop>{" "}
//                             </Box>
//                             <CardContent>
//                                 <Link href={`https://www.youtube.com/watch?v=${video.key}`} underline="none" target="_blank">
//                                     <Typography variant="body2" sx={{ color: '#fff', '&:hover': { color: 'text.secondary' } }} gutterBottom>
//                                         {video.name}
//                                     </Typography>
//                                 </Link>
//                                 <Typography variant="caption" color="text.secondary">
//                                     {`${video.type} • ${new Date(video.published_at).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: "numeric" })}`}
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     ))
//                 ) : (
//                     <Typography variant="body1" sx={{ letterSpacing: 1 }}>
//                         {`There are no English ${videoType} added to ${tvTitle.name}.`}
//                     </Typography>
//                 )
//             }
//         </>
//     );
// }

// export default Videos;