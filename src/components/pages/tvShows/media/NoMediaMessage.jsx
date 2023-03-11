import { Typography } from "@mui/material";

const NoMediaMessage = ({mediaType,tvShowTitle}) => {
    return (
        <Typography sx={{ color: "text.secondary", fontWeight: 300 }}>
            {`No ${mediaType} have been added to ${tvShowTitle}.`}
        </Typography>
    );
}

export default NoMediaMessage;