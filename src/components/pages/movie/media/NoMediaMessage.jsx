import { Typography } from "@mui/material";

const NoMediaMessage = ({mediaType,movieTitle}) => {
    return (
        <Typography sx={{ color: "text.secondary", fontWeight: 300 }}>
            {`No ${mediaType} have been added to ${movieTitle}.`}
        </Typography>
    );
}

export default NoMediaMessage;