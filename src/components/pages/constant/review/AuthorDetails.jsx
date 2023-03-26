import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const AuthorDetails = ({ author, created_at }) => {
    return (
        <Box>
            <Typography
                variant="body2"
                sx={{
                    fontWeight: 600,
                    letterSpacing: 1,
                    color: "#fff",
                }}
            >
                {author}
            </Typography>
            <Typography
                variant="caption"
                sx={{
                    letterSpacing: 1,
                    fontWeight: 700, color: grey[600]
                }}
            >
                {new Date(created_at).toLocaleDateString(
                    "en-US",
                    { month: "short", day: "numeric", year: "numeric" }
                )}
            </Typography>
        </Box>
    );
}

export default AuthorDetails;