import { useRef } from "react";
import { Link } from "react-router-dom";
import { Avatar, Box, Typography, Chip } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";
import { GradeRounded } from "@mui/icons-material";
import Slider from "react-slick";

import PreviousAndNextArrow from "../../constant/PreviousAndNextArrow";
import { sliderSettings } from "../../constant/SliderSettings";

const TrendingItems = ({ trendingItems }) => {

  const sliderRef = useRef(null);

  return (
    <Box>
      <Slider ref={sliderRef} {...sliderSettings}>
        {
          trendingItems.results?.map((movie) => (
            <Box key={movie?.id} sx={{ position: 'relative', width: 1, mb: 2, borderRadius: '20px' }}>
              <Avatar variant="rounded" sx={{ width: 1, height: 330, borderRadius: '20px' }}
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie?.poster_path}`} />
              <Box sx={{
                position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, width: 1,
                backgroundImage: 'linear-gradient(to top, rgb(32 32 32 / 94%) 90px, rgb(12 11 2 / 0%) 100%)',
                borderRadius: '17px'
              }} />
              <Box sx={{
                width: 1, position: 'absolute', bottom: 10, p: 1, display: 'flex',
                flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'
              }}>
                <Box sx={{ maxWidth: 200 }}>
                  <Box sx={{
                    display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
                    alignItems: 'center', gap: 1, mb: 1
                  }}>
                    <Chip size='small' sx={{ backgroundColor: grey[900] }}
                      icon={<GradeRounded fontSize='small'
                        sx={{ color: `${yellow['A700']} !important` }} />}
                      label={
                        <Typography variant='caption'>{movie.vote_average?.toFixed(1)}</Typography>
                      } />
                    <Chip size='small' sx={{ backgroundColor: grey[900] }} label={
                      <Typography variant='caption'>
                        {movie.release_date?.slice(0, 4)}
                        {movie.first_air_date?.slice(0, 4)}
                      </Typography>
                    } />
                  </Box>
                  <Link to={`/${movie.media_type === "movie" ? "movie" : "tv"}/${movie?.id}`} style={{
                    textAlign: 'center !important',
                    textDecoration: 'none'
                  }}>
                    <Typography variant="body2" sx={{
                      textAlign: 'center',
                      letterSpacing: 1,
                      color: '#fff',
                      '&:hover': { color: 'text.secondary' }
                    }}>
                      {movie?.title}
                      {movie?.name}
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Box>
          ))
        }
      </Slider>
      <PreviousAndNextArrow sliderRef={sliderRef} />
    </Box>
  );
};
export default TrendingItems;
