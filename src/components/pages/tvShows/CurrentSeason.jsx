import { Box, Typography } from "@mui/material";

import Season from "./allSeasons/Season";
import { ViewAllMedia } from "./media";

const CurrentSeason = ({ tvShow }) => {

    const season = tvShow.seasons?.find(season => season.season_number === tvShow.number_of_seasons);

    return (
        <Box sx={{ mb: { xs: 3, lg: 0 } }}>
            <Typography variant="h6" sx={{mb:2}}>
                Current Season
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', lg: 'flex-start' }
            }}>
                <Season tvShow={tvShow} season={season} />
                <ViewAllMedia
                    tvShowId={tvShow.id}
                    tvShowTitle={tvShow.name}
                    text="View All Seasons"
                    link="seasons" />
            </Box>
        </Box>
    );
};

export default CurrentSeason;
