import { useRef } from "react";
import { Box, Skeleton } from "@mui/material";
import Slider from "react-slick";

import { sliderSettings } from "../SliderSettings";
import PreviousAndNextArrow from "../PreviousAndNextArrow";

const MoviesSliderSkeleton = () => {
    const sliderRef = useRef(null);
    return (
        <Box>
            <Slider ref={sliderRef} {...sliderSettings}>
                {
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                        <Skeleton key={item}
                            variant="rounded"
                            width={219}
                            height={330}
                            animation="pulse"
                            sx={{ borderRadius: '20px' }} />
                    ))
                }
            </Slider>
            <PreviousAndNextArrow sliderRef={sliderRef} />
        </Box>
    );
}

export default MoviesSliderSkeleton;