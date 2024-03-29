import { Box, Typography, Chip } from "@mui/material";
import { yellow } from "@mui/material/colors";

const BackdropLanguagesLength = ({ image, displayLanguage, displayLengthItem }) => {

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
            <Typography
                variant="subtitle2"
                sx={{
                    textTransform: 'capitalize',
                    letterSpacing: 1
                }}>{displayLanguage(image)}</Typography>
            <Chip
                label={
                    <Typography
                        variant="caption"
                        color="text.primary"
                        sx={{ ".Mui-selected": { color: yellow[500] } }}>
                        {displayLengthItem(image)}
                    </Typography>
                }
                size="small"
                sx={{ background: 'linear-gradient(to right,#ED4700,#E76F00)' }} />
        </Box>
    );
}

export default BackdropLanguagesLength;