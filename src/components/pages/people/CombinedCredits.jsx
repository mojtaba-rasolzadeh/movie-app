import { Link } from 'react-router-dom';
import _ from "lodash";
import { Box, Chip, Typography, Divider, Avatar, CardActionArea } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";
import { GradeRounded } from '@mui/icons-material';

const CombinedCredits = ({ combinedCredits }) => {
  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 2, mb: 2 }}>
        <Typography variant="h6" sx={{ letterSpacing: 1 }}>All</Typography>
        <Chip label={combinedCredits?.length} size="small" sx={{ background: 'linear-gradient(to right,#ED4700,#E76F00)' }} />
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mt: 3 }}>
        {combinedCredits?.sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date))
          .map((item) => (
            <CardActionArea key={item.id} sx={{ width: 160, height: 240, borderRadius: '20px' }}>
              <Link
                to={`/${item.media_type === "tv" ? "tv" : "movie"}/${item.id}`}
                style={{ textDecoration: 'none' }}>
                <Box Box key={item.id} sx={{ position: 'relative', width: 160, borderRadius: '20px' }}>
                  <Avatar variant="rounded" sx={{ width: 1, height: 240, borderRadius: '20px' }} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`} />
                  <Box sx={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, width: 1, backgroundImage: 'linear-gradient(to top, rgb(32 32 32 / 94%) 90px, rgb(12 11 2 / 0%) 100%)', borderRadius: '17px' }} />
                  <Box sx={{ width: 1, position: 'absolute', bottom: 10, p: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <Box sx={{ maxWidth: 200 }}>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Chip size='small' sx={{ backgroundColor: grey[900] }} icon={<GradeRounded fontSize='small' sx={{ color: `${yellow['A700']} !important` }} />} label={
                          <Typography variant='caption'>{item.vote_average?.toFixed(1)}</Typography>
                        } />
                        <Chip size='small' sx={{ backgroundColor: grey[900] }} label={
                          <Typography variant='caption'>
                            {_.isUndefined(item.release_date)
                              ? _.isEmpty(item.first_air_date)
                                ? "—"
                                : item.first_air_date.slice(0, 4)
                              : _.isEmpty(item.release_date)
                                ? "—"
                                : item.release_date.slice(0, 4)}
                          </Typography>
                        } />
                      </Box>
                      <Link
                        to={`/${item.media_type === "tv" ? "tv" : "movie"}/${item.id}`}
                        style={{ textDecoration: 'none' }}>
                        <Typography variant="body2" sx={{ textAlign: 'center', letterSpacing: 1, color: '#fff', '&:hover': { color: 'text.secondary' } }}>
                          {item.title}
                          {item.name}
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Link>
            </CardActionArea>
          ))}
      </Box>
    </>
  );
};
export default CombinedCredits;