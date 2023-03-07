import { Avatar, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const TvShowPoster = ({ id, original_name, name, poster_path }) => {
    return (
        <CardActionArea
            sx={{
                display: { xs: "none", md: "inline-block" },
                width: 300,
                height: 450,
                borderRadius: '20px',
            }}
        >
            <Link
                to={`/tv/${id}-${original_name?.split(/[\s:,]/)
                    .join("-")
                    .split("--")
                    .join("-")
                    .toLowerCase()
                    }`}
                style={{ textDecoration: "none" }}
            >
                <Avatar
                    variant="rounded"
                    sx={{ width: 300, height: 450, borderRadius: '20px' }}
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}
                    alt={name}
                />
            </Link>
        </CardActionArea>
    );
}

export default TvShowPoster;