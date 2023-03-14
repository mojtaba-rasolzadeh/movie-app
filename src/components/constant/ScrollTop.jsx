import { Box, Fab, Fade, useScrollTrigger } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

const ScrollTop = (props) => {

    const { window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");

        if (anchor) {
            anchor.scrollIntoView({ block: "center" })
        }
    }

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16, }}
            >
                <Fab size="small" aria-label="scroll back to top" sx={{backgroundImage: 'linear-gradient(to right,#f3001d,#ff004d)',color:"#fff"}}>
                    <KeyboardArrowUp />
                </Fab>
            </Box>
        </Fade>
    )
}
export default ScrollTop;