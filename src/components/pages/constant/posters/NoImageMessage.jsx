import { Typography } from "@mui/material";

const NoImageMessage = ({ imageType, mediaTitle }) => {
    return (
        <Typography variant="body1" sx={{ letterSpacing: 1 }}>
            {`There are no English ${imageType} added to ${mediaTitle}.`}
        </Typography>
    );
}

export default NoImageMessage;