import { useState } from "react";
import { Pagination } from "@mui/material";
import { pink } from "@mui/material/colors";

const MoviePagination = ({ movieData, fetchData }) => {
  const [page, setPage] = useState(1);
  const handleChagePage = (event, value) => {
    setPage(value);
    fetchData(value);
  };
  return (
    <>
      {movieData && movieData.total_pages > 1 && (
        <Pagination
          count={movieData && movieData.total_pages > 500 ? 500 : movieData.total_pages}
          page={page}
          onChange={handleChagePage}
          // shape="rounded"
          variant="outlined"
          sx={{ display: "flex", justifyContent: "center", my: 3,pb:4,'.MuiPaginationItem-root.Mui-selected':{backgroundColor:'#f3001d'} }}
        />
      )}
    </>
  );
};
export default MoviePagination;
