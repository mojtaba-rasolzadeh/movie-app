import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const FullCastAndCrewButton = ({ mediaType, mediaId, mediaTitle }) => {
    return (
        <Link
            to={`/${mediaType}/${mediaId}-${mediaTitle?.split(/[\s:,]/)
                .join("-")
                .split("--")
                .join("-")
                .toLowerCase()
                }/cast`}
            style={{ textDecoration: "none" }}
        >
            <Typography
                variant="body2"
                sx={{
                    display: "inline-block",
                    fontWeight: "600",
                    color: "#fff",
                    "&:hover": { color: grey[600] },
                }}
            >
                Full Cast & Crew
            </Typography>
        </Link>
    );
}

export default FullCastAndCrewButton;