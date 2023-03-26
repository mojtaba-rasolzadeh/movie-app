import { Typography } from "@mui/material";

const NoVideoMessage = ({videoType,mediaTitle}) => {
    return (
        <Typography variant="body1" sx={{ letterSpacing: 1 }}>
            {`There are no English ${videoType} added to ${mediaTitle}.`}
        </Typography>
    );
}

export default NoVideoMessage;