import { Typography } from "@mui/material";

const NoVideoMessage = ({videoType,tvTitle}) => {
    return (
        <Typography variant="body1" sx={{ letterSpacing: 1 }}>
            {`There are no English ${videoType} added to ${tvTitle?.title}.`}
        </Typography>
    );
}

export default NoVideoMessage;