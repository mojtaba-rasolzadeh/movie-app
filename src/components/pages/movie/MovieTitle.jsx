import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { lime } from "@mui/material/colors";

const MovieTitle = ({ id, original_title, title, release_date }) => {
    return (
        <Link
            to={`/movie/${id}-${original_title?.split(/[\s:,]/)
                .join("-")
                .split("--")
                .join("-")
                .toLowerCase()
                }`}
            style={{ textDecoration: "none" }}
        >
            <Typography
                variant="h4"
                sx={{
                    display: "inline",
                    fontWeight: 700,
                    color: lime[500],
                    "&:hover": { color: lime[700] },
                }}
            >
                {title}{" "}
                <Typography
                    variant="h4"
                    component="span"
                    sx={{ fontWeight: "400", color: lime[200] }}
                >
                    {`(${release_date?.slice(0, 4)})`}
                </Typography>
            </Typography>
        </Link>
    );
}

export default MovieTitle;