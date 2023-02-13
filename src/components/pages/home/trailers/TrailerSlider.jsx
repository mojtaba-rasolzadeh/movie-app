import { Link } from "react-router-dom";
import _ from "lodash";
import Slider from "react-slick";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { lime, orange } from "@mui/material/colors";
import {
    ArrowForwardIos,
    ArrowBackIos,
    PlayArrowRounded,
} from "@mui/icons-material";

const TrailerSlider = ({ popularMovie,handleToggle }) => {

    function SampleNextArrow({ onClick }) {
        return (
            <div className="arrow arrow-next" onClick={onClick}>
                <ArrowForwardIos fontSize="large" />
            </div>
        );
    }

    function SamplePrevArrow({ onClick }) {
        return (
            <div className="arrow arrow-prev" onClick={onClick}>
                <ArrowBackIos fontSize="large" />
            </div>
        );
    }


    const settings = {
        className: "center",
        centerPading: "60px",
        centerMargin: "10px",
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        focusOnSelect: true,
        swipeToSlide: true,
        rows: 2,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 899,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                    rows: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                    dots: false,
                },
            },
        ],
    };


    return (
        <Slider {...settings}>
            {" "}
            {!_.isEmpty(popularMovie.results) &&
                popularMovie.results.map((item) => (
                    <Box
                        key={item.id}
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
                            <Avatar
                                variant="rounded"
                                sx={{
                                    maxWidth: { xs: 250, sm: 300 },
                                    width: { xs: 250, sm: 300 },
                                    height: 168,
                                }}
                                src={`https://image.tmdb.org/t/p/w355_and_h200_multi_faces${item.backdrop_path}`}
                            />{" "}
                            <IconButton
                                sx={{
                                    position: "absolute", top: "45px", left: "105px", color: "#fff",
                                    ":hover": { color: orange[500] },
                                }}
                                onClick={() => handleToggle(item.id)}
                            >
                                <PlayArrowRounded
                                    sx={{
                                        fontSize: "60px",
                                    }}
                                />{" "}
                            </IconButton>{" "}
                        </Box>{" "}
                        <Link to={`movie/${item.id}`} style={{ textDecoration: "none" }}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    display: "inline-block",
                                    color: lime[500],
                                    "&:hover": { color: lime[700] },
                                    mt: 1,
                                }}
                            >
                                {item.title}{" "}
                            </Typography>{" "}
                        </Link>{" "}
                    </Box>
                ))}{" "}
        </Slider>
    );
}

export default TrailerSlider;