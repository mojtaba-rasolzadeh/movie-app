import _ from "lodash";
import { Avatar, Box, ImageList, ImageListItem } from "@mui/material";
import Slider from "react-slick";

import { ViewMoreButton } from "../../../constant";
import ViewAllMedia from "./ViewAllMedia";
import NoMediaMessage from "./NoMediaMessage";

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
      breakpoint: 450,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
        arrows: true,
        dots: false
      }
    },
    {
      breakpoint: 374,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows: true,
        dots: false
      }
    },
  ]
};

const Posters = ({ id, title, images }) => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
      {_.isEmpty(images.posters) ? (<NoMediaMessage mediaType="posters" movieTitle={title} />) : (
        <ImageList variant="woven" cols={3} gap={8}>
          {images.posters?.slice(0, 9).map((item) => (
            <ImageListItem key={item.file_path}>
              <img
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.file_path}?w=248&fit=crop&auto=format`}
                srcSet={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.file_path}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.file_path}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
      <ViewAllMedia movieId={id} movieTitle={title} link="images/posters" text="View All Posters" />
    </Box>
  );
};

export default Posters;