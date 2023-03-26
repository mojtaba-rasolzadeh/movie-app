import { Box } from '@mui/material';
import Youtube from "react-youtube";

const YouTubePlayer = ({trailer}) => {
    return (
        <Box sx={{ position: 'relative' }}>
            <Youtube
                videoId={trailer.key}
                title=""
                opts={{
                    width: '640',
                    height: '390',
                    playerVars: {
                        controls: 1,
                    }
                }} />
        </Box>
    );
}

export default YouTubePlayer;