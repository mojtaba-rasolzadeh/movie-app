import _ from "lodash";
import { Avatar, Typography } from "@mui/material";
import Slider from "react-slick";

import { ViewMoreButton } from "../../../constant";

const settings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 9,
  slidesToScroll: 9,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 2500,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8,
      }
    },
    {
      breakpoint: 1860,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 1,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
      }
    },
    {
      breakpoint: 374,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        dots: false
      }
    },
  ]
};

const Posters = ({ id, title, images }) => {

  return (
    <>
      {_.isEmpty(images.posters) ? (
        <Typography sx={{ color: "text.secondary", fontWeight: 300 }}>
          {`No posters have been added to ${title}.`}
        </Typography>
      ) : (
        <Slider {...settings}>
          {images?.posters
            .slice(0, 6)
            .map((item, index) => (
              <Avatar
                key={index}
                variant="square"
                sx={{ width: 200, height: 300 }}
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.file_path}`}
              />
            ))}
          {images?.posters.length > 6 && (
            <ViewMoreButton
              link={`/movie/${id}-${title
                .split(/[\W]/)
                .join("-")
                .split("--")
                .join("-")
                .toLowerCase()
                }/images/posters`}
            />
          )}
        </Slider>
      )}
    </>
  );
};

export default Posters;
