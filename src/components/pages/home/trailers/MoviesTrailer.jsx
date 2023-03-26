import { useRef } from 'react';
import { Link } from "react-router-dom";
import _ from "lodash";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";

import TrailerPoster from './TrailerPoster';
import PlayVideoButton from "../../constant/trailersAndVideos/PlayVideoButton";
import { trailerSliderSettings } from "../../constant/SliderSettings";
import PreviousAndNextArrow from '../../constant/PreviousAndNextArrow';

const MoviesTrailer = ({ movieData, handleToggle }) => {

    const sliderRef = useRef();

    return (
        <Box>
            <Slider ref={sliderRef} {...trailerSliderSettings}>
                {" "}
                {!_.isEmpty(movieData?.results) &&
                    movieData.results?.map((movie) => (
                        <Box
                            key={movie.id}
                            sx={{
                                display: "flex!important",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                my: 3.75,
                                textAlign: "center",
                            }}
                        >
                            <Box sx={{ position: "relative" }}>
                                <TrailerPoster {...movie} />
                                <PlayVideoButton handleToggle={() => handleToggle(movie.id)} />

                            </Box>{" "}
                            <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        display: "inline-block",
                                        color: '#fff',
                                        "&:hover": { color: 'text.secondary' },
                                        mt: 1,
                                    }}
                                >
                                    {movie.title}{" "}
                                </Typography>{" "}
                            </Link>{" "}
                        </Box>
                    ))}{" "}
            </Slider>
            <PreviousAndNextArrow sliderRef={sliderRef} />
        </Box>
    );
}

export default MoviesTrailer;