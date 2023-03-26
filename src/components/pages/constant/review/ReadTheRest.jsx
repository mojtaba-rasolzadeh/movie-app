import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const ReadTheRest = ({ id }) => {
    return (
        <Link to={`/review/${id}`} style={{ textDecorationColor: '#fff' }}>
            <Typography
                component="span"
                variant="body2"
                sx={{
                    color: '#fff',
                    '&:hover': { color: grey[600] }
                }}>
                read the rest.
            </Typography>
        </Link>
    );
}

export default ReadTheRest;