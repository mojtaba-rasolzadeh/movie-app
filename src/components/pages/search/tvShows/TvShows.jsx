import { useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { Avatar, Box, CardActionArea, Chip, Typography } from '@mui/material';
import { GradeRounded } from "@mui/icons-material";
import { grey, yellow } from "@mui/material/colors";

import { getSearchTvShows } from "../../../../services/MovieService";
import { Loader } from "../../../constant";
import TvShowPagination from '../../../pages/tvShows/TvShowPagination';

const TvShows = ({ tvShowsData, query }) => {
  const [loading, setLoading] = useState(false);
  const [tvShows, setTvShows] = useState({ ...tvShowsData });

  const handleChangePage = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getSearchTvShows(query, page);
      if (status === 200) {
        setLoading(false);
        setTvShows(data);
      }
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  return (
    <>
      {_.isEmpty(tvShows.results) ? (
        <Typography sx={{ letterSpacing: 1 }}>
          There are no TV shows that matched your query.
        </Typography>
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
            // tvShows.results.map((item) => (
            //   <Card key={item.id} sx={{ display: "flex", mb: 3 }}>
            //     <CardActionArea
            //       sx={{ maxWidth: 94, width: 94, borderRadius: 1 }}
            //     >
            //       <Link
            //         to={`/tv/${item.id}`}
            //         style={{ textDecoration: "none" }}
            //       >
            //         <Avatar
            //           variant="rounded"
            //           sx={{ maxWidth: 94, width: 94, height: 141 }}
            //           src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2${item.poster_path}`}
            //         />
            //       </Link>
            //     </CardActionArea>
            //     <CardContent>
            //       <Link
            //         to={`/tv/${item.id}`}
            //         style={{ textDecoration: "none" }}
            //       >
            //         <Typography
            //           variant="subtitle1"
            //           color="whitesmoke"
            //           sx={{
            //             display: " -webkit-box",
            //             WebkitLineClamp: { xs: 1, md: 2 },
            //             WebkitBoxOrient: "vertical",
            //             textOverflow: "ellipsis",
            //             overflow: "hidden",
            //           }}
            //         >
            //           {item.name}
            //         </Typography>
            //       </Link>
            //       <Typography variant="caption" color="text.secondary">
            //         {new Date(item.first_air_date).toLocaleDateString("en-US", {
            //           month: "long",
            //           day: "numeric",
            //           year: "numeric",
            //         })}
            //       </Typography>
            //       <Typography
            //         variant="body2"
            //         sx={{
            //           display: " -webkit-box",
            //           WebkitLineClamp: { xs: 1, md: 2 },
            //           WebkitBoxOrient: "vertical",
            //           textOverflow: "ellipsis",
            //           overflow: "hidden",
            //         }}
            //       >
            //         {item.overview}
            //       </Typography>
            //     </CardContent>
            //   </Card>
            // ))
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
              {
                tvShows.results?.map((tv) => (
                  <CardActionArea key={tv.id} sx={{ width: 220, height: 330, borderRadius: '20px' }}>
                    <Link to={`/tv/${tv.id}`} style={{ textDecoration: 'none' }}>
                      <Box sx={{ position: 'relative', width: 220, mb: 2, borderRadius: '20px' }}>
                        <Avatar variant="rounded" sx={{ width: 1, height: 330, borderRadius: '20px' }} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${tv.poster_path}`} />
                        <Box sx={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, width: 1, backgroundImage: 'linear-gradient(to top, rgb(32 32 32 / 94%) 90px, rgb(12 11 2 / 0%) 100%)', borderRadius: '17px' }} />
                        <Box sx={{ width: 1, position: 'absolute', bottom: 10, p: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                          <Box sx={{ maxWidth: 200 }}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 1 }}>
                              <Chip size='small' sx={{ backgroundColor: grey[900] }} icon={<GradeRounded fontSize='small' sx={{ color: `${yellow['A700']} !important` }} />} label={
                                <Typography variant='caption'>{tv.vote_average.toFixed(1)}</Typography>
                              } />
                              <Chip size='small' sx={{ backgroundColor: grey[900] }} label={
                                <Typography variant='caption'>{_.isEmpty(tv.first_air_date) ? '-' : tv.first_air_date.slice(0, 4)}</Typography>
                              } />
                            </Box>
                            <Link to={`/tv/${tv.id}`} style={{ textAlign: 'center !important', textDecoration: 'none' }}>
                              <Typography variant="body2" sx={{ textAlign: 'center', letterSpacing: 1, color: '#fff', '&:hover': { color: 'text.secondary' } }}>{tv.name}</Typography>
                            </Link>
                          </Box>
                        </Box>
                      </Box>
                    </Link>
                  </CardActionArea>
                ))
              }
            </Box >
          )}
          <TvShowPagination tvShowData={tvShows} fetchData={handleChangePage} />
        </>
      )}
    </>
  );
};
export default TvShows;
