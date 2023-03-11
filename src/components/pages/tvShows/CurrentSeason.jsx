import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import Season from "./allSeasons/Season";

const CurrentSeason = ({ tvShow }) => {

    const season = tvShow.seasons?.find(season => season.season_number === tvShow.number_of_seasons);

    return (
        <Box sx={{ my: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Current Season
            </Typography>
            <>
                <Season tvShow={tvShow} season={season} />
                <Box sx={{ my: 3 }}>
                    <Link
                        to={`/tv/${tvShow.id}-${tvShow.name?.split(/[\s:,]/)
                            .join("-")
                            .split("--")
                            .join("-")
                            .toLowerCase()
                            }/seasons`}
                        style={{ textDecoration: "none" }}
                    >
                        <Typography
                            sx={{
                                display: "inline-block",
                                fontWeight: "600",
                                color: "#fff",
                                "&:hover": { color: "text.secondary" },
                            }}
                        >
                            View All Seasons
                        </Typography>
                    </Link>
                </Box>
            </>
        </Box>
    );
};

export default CurrentSeason;
