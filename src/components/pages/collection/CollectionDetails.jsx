import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const CollcetionDetails = ({ name, overview }) => {
    return (
        <Box sx={{
            height:1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
        }}>
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 700,
                    letterSpacing: 1
                }}
                gutterBottom
            >
                {name}
            </Typography>
            <Box sx={{ mt: { xs: 0, sm: 2, lg: 1 } }}>
                <Typography variant="h6" gutterBottom>
                    Overview
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, color: grey[600] }}>
                    {overview?.length === 0 ? (
                        "We don't have an overview translated in English!"
                    ) : (
                        overview
                    )}
                </Typography>
            </Box>
        </Box>
    );
}

export default CollcetionDetails;