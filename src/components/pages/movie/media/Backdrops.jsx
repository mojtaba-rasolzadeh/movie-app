import _ from "lodash";
import { Avatar, Typography } from "@mui/material";
import Slider from "react-slick";

import { ViewMoreButton } from "../../../constant";

const settings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 2500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1860,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        dots: true
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows:true,
        dots: false,
      }
    },
  ]
};

const Backdrops = ({ id, title, images }) => {

  return (
    <>
      {_.isEmpty(images.backdrops) ? (
        <Typography sx={{ color: "text.secondary", fontWeight: 300 }}>
          {`No backdrops have been added to ${title}.`}
        </Typography>
      ) : (
        <Slider {...settings}>
          {images?.backdrops
            .slice(0, 6)
            .map((item, index) => (
              <Avatar
                key={index}
                variant="square"
                sx={{height: 300}}
                src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${item.file_path}`}
              />
            ))}
          {images?.backdrops.length > 6 && (
            <ViewMoreButton
              link={`/movie/${id}-${title?.split(/[\W]/)
                .join("-")
                .split("--")
                .join("-")
                .toLowerCase()
                }/images/backdrops`}
            />
          )}
        </Slider>
      )}
    </>
  );
};

export default Backdrops;