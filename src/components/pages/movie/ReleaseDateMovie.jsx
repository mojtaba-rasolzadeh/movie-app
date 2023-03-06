import { Typography } from "@mui/material";
import { EventAvailableRounded } from "@mui/icons-material";

const ReleaseDateMovie = ({release_date}) => {
    return (
        <>
            <EventAvailableRounded color="secondary" />
            <Typography variant="subtitle2">
                {release_date}
            </Typography>
        </>
    );
}

export default ReleaseDateMovie;