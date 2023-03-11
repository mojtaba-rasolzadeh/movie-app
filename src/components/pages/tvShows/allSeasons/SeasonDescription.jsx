import { Typography } from '@mui/material';

const SeasonDescription = ({ tvShow, season }) => {
    return (
        <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{
                letterSpacing: 1,
                mt: 3
            }}
        >
            {`${season?.name} of ${tvShow?.name} premiered on ${new Date(season?.air_date)
                .toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.`}
        </Typography>
    );
}

export default SeasonDescription;