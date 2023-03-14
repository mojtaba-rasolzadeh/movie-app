import { useState } from "react";
import _ from "lodash";
import { Typography } from '@mui/material';

import { getSearchTvShows } from "../../../../services/MovieService";
import { Loader } from "../../../constant";
import TvShowItem from '../../tvShows/TvShowItem';
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
          {loading ? (<Loader />) : (<TvShowItem tvShowData={tvShows} />)}
          <TvShowPagination tvShowData={tvShows} fetchData={handleChangePage} />
        </>
      )}
    </>
  );
};
export default TvShows;
