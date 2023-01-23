import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import Slider from "react-slick";
import { Avatar, Box, Fade, Typography } from "@mui/material";

import { MediaScrollbar } from "../../../constant";
import { blueGrey } from "@mui/material/colors";

const OnTv = ({ popularTv }) => {

  const [loading, setLoading] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);
  return (
    // <Box sx={{ justifyContent: 'center', alignItems: 'center' }}>
    <>
      <Slider {...settings}>
        {
          !_.isEmpty(popularTv.results) && popularTv.results.map((item, index) => (
            <Box key={item.id} sx={{ justifyContent: 'center', alignItems: 'center' }}>
              <Avatar variant="rounded" sx={{ minWidth: 300, width: 300, height: 168 }} src={`https://image.tmdb.org/t/p/w355_and_h200_multi_faces${item.backdrop_path}`} />
            </Box>
          ))
        }
      </Slider>
    </>
    // </Box>
  );
};
export default OnTv;
