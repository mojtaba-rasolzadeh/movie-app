import { Button } from "@mui/material";

const WatchTrialerButton = ({ videos, displayTrailer }) => {

    let playTrialer;

    if ((videos?.results.length > 0) || (videos?.length > 0)) {
        playTrialer = (
            <Button
                variant="text"
                sx={{
                    mt: 3,
                    fontSize: '1rem',
                    textTransform: 'capitalize',
                    letterSpacing: 1,
                    background: 'linear-gradient(to right,#f3001d,#ff004d)',
                    color: '#fff',
                    transform: 'skew(-20deg)',
                    padding: '.5rem 2.5rem',
                    borderRadius: '10px'
                }}
                onClick={displayTrailer}
            >
                watch trailer
            </Button>
        );
    } else {
        playTrialer = null;
    }

    return (playTrialer);
}

export default WatchTrialerButton;