import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const ReadAllReviews = ({ tvShowId, tvShowTitle }) => {
    return (
        <Link to={`/tv/${tvShowId}-${tvShowTitle?.split(/[\s:,]/)
            .join("-").split("--").join("-").toLowerCase()}/reviews`}
            style={{ textDecoration: "none" }}>
            <Typography
                sx={{
                    display: "inline-block",
                    color: '#fff',
                    "&:hover": { color: 'text.secondary' },
                    fontWeight: "700",
                    mt: 6.25,
                }}
            >
                Read All Reviews
            </Typography>
        </Link>
    );
}

export default ReadAllReviews;