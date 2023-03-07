import { Typography } from "@mui/material";
import { EventAvailableRounded } from "@mui/icons-material";

const ReleaseDateTvShow = ({ first_air_date }) => {

    return (
        <>
            <EventAvailableRounded color="secondary" />
            <Typography variant="subtitle2">
                {first_air_date}
            </Typography>
        </>
    )
}
export default ReleaseDateTvShow;