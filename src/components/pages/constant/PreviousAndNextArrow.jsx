import { Box, IconButton } from '@mui/material';
import { ExpandCircleDown } from '@mui/icons-material';

const PreviousAndNextArrow = ({ sliderRef }) => {

    function handleNext() {
        sliderRef.current.slickNext();
    }

    function handlePrevious() {
        sliderRef.current.slickPrev();
    }
    return (
        <Box style={{ textAlign: "center" }}>
            <IconButton onClick={handlePrevious}>
                <ExpandCircleDown fontSize='large' sx={{ transform: 'rotate(90deg)' }} />
            </IconButton>
            <IconButton onClick={handleNext}>
                <ExpandCircleDown fontSize='large' sx={{ transform: 'rotate(270deg)' }} />
            </IconButton>
        </Box>
    );
}

export default PreviousAndNextArrow;