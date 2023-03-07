import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { lime } from "@mui/material/colors";

const TvShowTitle = ({ id, original_name, name, first_air_date }) => {

    return (
        <Link
            to={`/tv/${id}-${original_name?.split(/[\s:,]/)
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
                {name}{" "}
                <Typography
                    variant="h4"
                    component="span"
                    sx={{ fontWeight: "400", color: lime[200] }}
                    color="text.secondary"
                >
                    {`(${first_air_date?.slice(0, 4)})`}
                </Typography>
            </Typography>
        </Link>
    )
}
export default TvShowTitle;