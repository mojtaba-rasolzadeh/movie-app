import { Box, Typography, Chip } from "@mui/material";
import { yellow } from "@mui/material/colors";

const VideoItemLength = ({ videos, type }) => {

    const displayLengthItem = (item) => {
        let results = videos.filter(video => video.type === item);
        return results.length;
    };

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Typography variant="subtitle2"
                sx={{
                    textTransform: 'capitalize',
                    letterSpacing: 1
                }}>{type}</Typography>
            <Chip
                label={
                    <Typography
                        variant="caption"
                        color="text.primary"
                        sx={{ ".Mui-selected": { color: yellow[500] } }}>
                        {displayLengthItem(type)}
                    </Typography>
                }
                size="small"
                sx={{ backgroundImage: 'linear-gradient(to right,#f3001d,#ff004d)' }} />
        </Box>
    );
}

export default VideoItemLength;