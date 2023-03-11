import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const ViewAllMedia = ({ tvShowId, tvShowTitle, link, text }) => {
    return (
        <Link to={`/tv/${tvShowId}-${tvShowTitle?.split(/[\W]/)
            .join("-")
            .split("--")
            .join("-")
            .toLowerCase()}/${link}`}
            style={{ textDecoration: 'none' }}>
            <Typography sx={{
                display: "inline-block",
                letterSpacing: 1,
                fontWeight: "600",
                color: "#fff",
                "&:hover": { color: "text.secondary" },
                mt: 3
            }}>
                {text}
            </Typography>
        </Link>
    );
}

export default ViewAllMedia;