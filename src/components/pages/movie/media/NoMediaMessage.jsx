import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const NoMediaMessage = ({mediaType,movieTitle}) => {
    return (
        <Typography sx={{ color: grey[600], fontWeight: 600 }}>
            {`No ${mediaType} have been added to ${movieTitle}.`}
        </Typography>
    );
}

export default NoMediaMessage;