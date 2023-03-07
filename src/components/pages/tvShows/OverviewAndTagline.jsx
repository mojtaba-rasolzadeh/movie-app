import { Box, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";

const OverviewAndTagline = ({ tagline, overview }) => {
    return (
        <Box>
            <Typography variant="body1" color="text.secondary">
                {tagline}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "700", my: 1 }}>
                Overview
            </Typography>
            {overview?.length <= 0 || overview === "" ? (
                <Typography variant="body2" sx={{ color: orange[50] }}>
                    We don't have an overview translated in English. Help us expand our database by adding one.
                </Typography>
            ) : (
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    {overview}
                </Typography>
            )}
        </Box>
    );
}

export default OverviewAndTagline;