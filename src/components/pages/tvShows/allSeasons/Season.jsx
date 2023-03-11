import { Card, CardContent } from '@mui/material';

import { SeasonPoster, SeasonName, SeasonEpisodeCount, SeasonDescription } from './';

const Season = ({ tvShow, season }) => {
    return (
        <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, height: 1, mb: 3 }}>
            <SeasonPoster tvShow={tvShow} season={season} />
            <CardContent>
                <SeasonName tvShow={tvShow} season={season} />
                <SeasonEpisodeCount season={season} />
                <SeasonDescription tvShow={tvShow} season={season} />
            </CardContent>
        </Card>
    );
}

export default Season;