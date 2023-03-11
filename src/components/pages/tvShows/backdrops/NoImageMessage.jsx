import { Typography } from "@mui/material";

const NoImageMessage = ({ imageType, tvTitle }) => {
    return (
        <Typography variant="body1" sx={{ letterSpacing: 1 }}>
            {`There are no English ${imageType} added to ${tvTitle.title}.`}
        </Typography>
    );
}

export default NoImageMessage;