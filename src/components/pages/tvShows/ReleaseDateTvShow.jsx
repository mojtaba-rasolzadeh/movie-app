import { Box, Typography } from "@mui/material";
import { EventAvailableRounded } from "@mui/icons-material";

const ReleaseDateTvShow = ({ first_air_date }) => {

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
            <EventAvailableRounded />
            <Typography
                variant="h6"
                sx={{ fontWeight: "700" }}
            >
                {`${first_air_date?.slice(0, 4)}`}
            </Typography>
        </Box>
    )
}
export default ReleaseDateTvShow;