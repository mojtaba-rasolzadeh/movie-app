import { Box, Chip, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";

const MediaItemLength = ({ mediaTitle, media }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Typography sx={{ color: yellow[700], textTransform: 'capitalize', letterSpacing: 1 }}>
                {mediaTitle}
            </Typography>
            <Chip
                label={
                    <Typography
                        variant="caption"
                        component="span"
                        color="text.secondary"
                        sx={{ fontWeight: "700" }}>
                        {media?.length}
                    </Typography>
                }
                size="small"
                sx={{ px: 0.75, background: 'linear-gradient(to right,#ED4700,#E76F00)' }}
            />
        </Box>
    );
}

export default MediaItemLength;