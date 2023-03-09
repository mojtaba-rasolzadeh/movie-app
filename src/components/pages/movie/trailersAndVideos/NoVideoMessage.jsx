import { Typography } from "@mui/material";

const NoVideoMessage = ({videoType,moiveTitle}) => {
    return (
        <Typography variant="body1" sx={{ letterSpacing: 1 }}>
            {`There are no English ${videoType} added to ${moiveTitle.title}.`}
        </Typography>
    );
}

export default NoVideoMessage;