import { useState } from "react";
import { Pagination } from "@mui/material";

const MoviePagination = ({ movieData, fetchData }) => {
  const [page, setPage] = useState(1);
  const handleChagePage = (event, value) => {
    setPage(value);
    fetchData(value);
  };
  return (
    <>
      {movieData.total_pages > 1 && (
        <Pagination
          count={movieData.total_pages > 500 ? 500 : movieData.total_pages}
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
export default MoviePagination;
