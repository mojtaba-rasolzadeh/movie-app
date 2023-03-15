import { Link } from "react-router-dom";
import _ from "lodash";
import { Avatar, Box, Card, CardActionArea, Typography } from "@mui/material";

const TopCast = ({ id, title, credits }) => {

  //   dots: true,
  //   arrows: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 10,
  //   slidesToScroll: 10,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 2900,
  //       settings: {
  //         slidesToShow: 9,
  //         slidesToScroll: 9,
  //       }
  //     },
  //     {
  //       breakpoint: 2500,
  //       settings: {
  //         slidesToShow: 8,
  //         slidesToScroll: 8,
  //       }
  //     },
  //     {
  //       breakpoint: 2300,
  //       settings: {
  //         slidesToShow: 7,
  //         slidesToScroll: 7,
  //       }
  //     },
  //     {
  //       breakpoint: 2000,
  //       settings: {
  //         slidesToShow: 6,
  //         slidesToScroll: 6,
  //       }
  //     },
  //     {
  //       breakpoint: 1860,
  //       settings: {
  //         slidesToShow: 5,
  //         slidesToScroll: 5,
  //         infinite: false,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 1400,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 4,
  //         infinite: false,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 1185,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: false,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 850,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 1,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 460,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //         arrows: true,
  //         dots: false
  //       }
  //     },
  //   ]
  // };
  return (
    <>
      {_.isEmpty(credits?.cast) ? (
        <Box>
          <Typography color="text.secondary">
            We don't have any cast added to this movie. You can help by adding
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
        <Card sx={{ mt: 4, p: 3, borderRadius: '20px' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" gutterBottom>Top Cast</Typography>
            <Link
              to={`/movie/${id}-${title?.split(/[\s:,]/)
                .join("-")
                .split("--")
                .join("-")
                .toLowerCase()
                }/cast`}
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{
                  display: "inline-block",
                  // fontWeight: "600",
                  color: "#fff",
                  "&:hover": { color: "text.secondary" },
                }}
              >
                Full Cast & Crew
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 2 }}>
            {
              credits?.cast.slice(0, 6).map((user) => (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CardActionArea sx={{ width: 64, height: 64, borderRadius: '50%' }}>
                    <Link
                      to={`/person/${user.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Avatar sx={{
                        width: 64, height: 64
                      }}
                        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${user.profile_path}`} />
                    </Link>
                  </CardActionArea>
                  <Box>
                    <Link
                      to={`/person/${user.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          letterSpacing: 1,
                          color: "#fff",
                          "&:hover": { color: "text.secondary" },
                        }}
                      >
                        {user.name}
                      </Typography>
                    </Link>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        letterSpacing: 1,
                      }}
                    >
                      {user.character}
                    </Typography>
                  </Box>
                </Box>
              ))
            }
          </Box>
        </Card>
      )}
    </>
  );
};

export default TopCast;