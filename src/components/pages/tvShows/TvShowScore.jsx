import { Box, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";

import { UserScore } from "../../../components/constant";

const TvShowScore = ({ vote_average }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
                sx={{
                    display: "inline-block",
                    cursor: "pointer",
                    "&:hover": { transform: "scale(1.2)" },
                }}
            >
                <UserScore vote_average={vote_average} size={60} />
            </Box>
            <Typography
                variant="body1"
                component="div"
                sx={{ fontWeight: "700", color: yellow[300], letterSpacing: 1 }}
            >
                User <br /> Score
            </Typography>
        </Box>
    );
}

export default TvShowScore;