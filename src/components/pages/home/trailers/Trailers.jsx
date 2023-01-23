import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import Slider from "react-slick";
import { Box, Typography, Avatar, IconButton, Backdrop } from "@mui/material";
import { amber, lime, orange, red } from "@mui/material/colors";
import {
  ArrowForwardIos,
  ArrowBackIos,
  PlayArrowRounded,
  Close,
} from "@mui/icons-material";
import Youtube from "react-youtube";

import { getDiscoverMovie, getListOfMoviesInTheatres, getMovie, getPopularMovies } from "../../../../services/MovieService";
import OnTv from "./OnTv";
import { Loader } from "../../../constant";

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

const Trailers = () => {
  const [popularMovie, setPopularMovie] = useState({});
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [play, setPlay] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setPlay(false);
  };

  const handleToggle = async (movieId) => {
    setPlay(true);
    setOpen((prevOpen) => !prevOpen);

    try {
      setLoading(true);
      const { status, data } = await getMovie(movieId);
      if (status === 200) {
        setLoading(false);
        // setMovie(movieData.videos.results);
        // if (movieData.videos.results) {
        const trailer = data.videos.results.find(item => item.name === "Official Trailer");
        setTrailer(trailer ? trailer : data.videos.results[0])
        // console.log(movieData.videos.results)
        // }
      }
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

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
      // {
      //   breakpoint: 899,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     infinite: true,
      //     dots: true,
      //   }
      // },
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
          rows: 1,
          // arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          dots: false,
          // arrows: false,
        },
      },
      // {
      //   breakpoint: 300,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     rows: 1,
      //     dots: false,
      //     arrows: true,
      //   }
      // }
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const { status, data: movieData } = await getPopularMovies();
        const { status, data: movieData } = await getDiscoverMovie();
        if (status === 200) {
          setPopularMovie(movieData);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ my: 10, py: 3 }}>
      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: "1.25rem", md: "1.5rem" },
          color: amber[500],
          letterSpacing: 1,
        }}
      >
        Trailers{" "}
      </Typography>{" "}
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
      </Slider>{" "}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        {loading
          ? <Loader />
          :
          trailer && play ?
            (
              <Box sx={{ position: 'relative' }}>
                {/* <IconButton sx={{ position: 'absolute', right: "0", backgroundColor: orange[500] }}>
                  <Close />
                </IconButton> */}
                <Youtube
                  videoId={trailer.key}
                  title={"hello mojooo"}

                  opts={{
                    width: '640',
                    height: '390',
                    // width: { xs: 540, sm: 540, md: 640, lg: 640, xl: 640 },
                    // height: { xs: 290, sm: 290, md: 390, lg: 390, xl: 390 },
                    playerVars: {
                      controls: 1,
                    }
                  }} />
              </Box>
            )
            : 'Sorry, no trailer available'
        }
        {" "}
      </Backdrop>{" "}
    </Box>
  );
};
export default Trailers;
