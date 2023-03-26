import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const ReadAllReviews = ({mediaType, mediaId, mediaTitle }) => {
    return (
        <Link to={`/${mediaType}/${mediaId}-${mediaTitle?.split(/[\s:,]/)
            .join("-").split("--").join("-").toLowerCase()}/reviews`}
            style={{ textDecoration: "none" }}>
            <Typography
                variant="body2"
                sx={{
                    display: "inline-block",
                    fontWeight: "600",
                    color: "#fff",
                    "&:hover": { color: grey[600] },
                }}
            >
                Read All Reviews
            </Typography>
        </Link>
    );
}

export default ReadAllReviews;