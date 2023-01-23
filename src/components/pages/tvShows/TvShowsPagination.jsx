import { useState } from "react";
import { Pagination } from "@mui/material";

const TvshowsPagination = ({ tvShowsData, fetchData }) => {
  const [page, setPage] = useState(1);
  const handleChagePage = (event, value) => {
    setPage(value);
    fetchData(value);
  };
  return (
    <>
      {tvShowsData.total_pages > 1 && (
        <Pagination
          count={tvShowsData.total_pages > 500 ? 500 : tvShowsData.total_pages}
          page={page}
          onChange={handleChagePage}
          shape="rounded"
          variant="outlined"
          sx={{ display: "flex", justifyContent: "center", mt: 3 }}
        />
      )}
    </>
  );
};
export default TvshowsPagination;
