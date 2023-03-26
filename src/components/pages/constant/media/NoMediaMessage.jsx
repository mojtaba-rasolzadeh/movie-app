import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const NoMediaMessage = ({ itemType, mediaTitle }) => {
    return (
        <Typography variant="body2" sx={{
            color: grey[600],
            fontWeight: 600
        }}>
            {`No ${itemType} have been added to ${mediaTitle}.`}
        </Typography>
    );
}

export default NoMediaMessage;