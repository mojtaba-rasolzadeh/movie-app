import { Link } from "react-router-dom";
import _ from "lodash";
import { Box, Avatar, Typography } from "@mui/material";

import { ViewMoreButton } from "../../../components/constant";
import Slider from "react-slick";

const SeriesCast = ({ id, name, aggregate_credits }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 2900,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 9,
        }
      },
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        }
      },
      {
        breakpoint: 2300,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        }
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 1860,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1185,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: true
        }
      },
      {
        breakpoint: 460,
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
  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
        Series Cast
      </Typography>
      {_.isEmpty(aggregate_credits?.cast) ? (
        <Box>
          <Typography color="text.secondary">
            We don't have any cast added to this tv. You can help by adding
            some!
          </Typography>
          <Box
            sx={{
              my: 3,
            }}
          >
            <Link to="#" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  letterSpacing: 1,
                  fontWeight: "600",
                  color: "#fff",
                  "&:hover": { color: "text.secondary" },
                }}
              >
                Add Missing Cast & Crew
              </Typography>
            </Link>
          </Box>
        </Box>
      ) : (
        <>
          <Slider {...settings}>
            {aggregate_credits?.cast.slice(0, 9).map((item) => (
              <Box key={item.id} sx={{ position: 'relative', width: 1, mb: 2, borderRadius: '20px' }}>
                <Avatar variant="rounded" sx={{ width: 1, height: 330, borderRadius: '20px' }} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.profile_path}`} />
                <Box sx={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, width: 1, backgroundImage: 'linear-gradient(to top, rgb(32 32 32 / 94%) 60px, rgb(12 11 2 / 0%) 100%)', borderRadius: '17px' }} />
                <Box sx={{ width: 1, position: 'absolute', bottom: 10, p: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                  <Box sx={{ maxWidth: 200 }}>
                    <Link
                      to={`/person/${item.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          letterSpacing: 1,
                          color: "#fff",
                          "&:hover": { color: "text.secondary" },
                        }}
                        gutterBottom
                      >
                        {item.name}
                      </Typography>
                    </Link>
                    {
                      item?.roles.map((cast, index) => (
                        <>
                          <Typography
                            key={index}
                            variant="body2"
                            sx={{ fontWeight: "300", letterSpacing: 1 }}
                          >
                            {cast.character}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ fontWeight: '300', letterSpacing: 1 }}>
                            {cast.episode_count} Episodes
                          </Typography>
                        </>
                      ))
                    }
                  </Box>
                </Box>
              </Box>
            ))}
            {aggregate_credits?.cast.length > 9 && (
              <ViewMoreButton
                link={`/tv/${id}-${name?.split(/[\s:,]/)
                  .join("-")
                  .split("--")
                  .join("-")
                  .toLowerCase()
                  }/cast`}
              />
            )}
          </Slider>
          <Box
            sx={{
              my: 3,
            }}
          >
            <Link
              to={`/tv/${id}-${name?.split(/[\s:,]/)
                .join("-")
                .split("--")
                .join("-")
                .toLowerCase()
                }/cast`}
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  display: "inline-block",
                  fontWeight: "600",
                  color: "#fff",
                  "&:hover": { color: "text.secondary" },
                }}
              >
                Full Cast & Crew
              </Typography>
            </Link>
          </Box>
        </>
      )}
    </>
  );
};

export default SeriesCast;