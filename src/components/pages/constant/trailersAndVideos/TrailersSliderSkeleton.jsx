import { useRef } from "react";
import { Box, Skeleton } from "@mui/material";
import Slider from "react-slick";

import { trailerSliderSettings } from "../SliderSettings";
import PreviousAndNextArrow from "../PreviousAndNextArrow";

const TrailersSliderSkeleton = () => {
    const sliderRef = useRef(null);
    return (
        <Box>
            <Slider ref={sliderRef} {...trailerSliderSettings}>
                {
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                        <Skeleton key={item}
                            variant="rounded"
                            width={420}
                            height={200}
                            animation="pulse"
                            sx={{ borderRadius: '20px' }} />
                    ))
                }
            </Slider>
            <PreviousAndNextArrow sliderRef={sliderRef} />
        </Box>
    );
}

export default TrailersSliderSkeleton;