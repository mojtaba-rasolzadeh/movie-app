import { Button } from "@mui/material";
import { PlayArrowRounded } from "@mui/icons-material";

const PlayTrialerButton = ({ videos, displayTrailer }) => {

    let playTrialer;

    if ((videos?.results.length > 0) || (videos?.length > 0)) {
        playTrialer = (
            <Button
                variant="text"
                startIcon={<PlayArrowRounded />}
                sx={{ color: "#fff", textTransform: 'capitalize', letterSpacing: 1 }}
                onClick={displayTrailer}
            >
                Play Trailer
            </Button>
        );
    } else {
        playTrialer = null;
    }

    return (playTrialer);
}

export default PlayTrialerButton;