import { useState } from "react";
import { Pagination } from "@mui/material";

const TvShowPagination = ({ tvShowData, fetchData }) => {
    const [page, setPage] = useState(1);
    const handleChagePage = (event, value) => {
        setPage(value);
        fetchData(value);
    };
    return (
        <>
            {tvShowData?.total_pages > 1 && (
                <Pagination
                    count={tvShowData?.total_pages > 500 ? 500 : tvShowData.total_pages}
                    page={page}
                    onChange={handleChagePage}
                    variant="outlined"
                    sx={{ display: "flex", justifyContent: "center", mt: 3, '.MuiPaginationItem-root.Mui-selected': { backgroundColor: '#f3001d' }, '.MuiPaginationItem-root:hover': { backgroundColor: '#f3001d' } }}
                />
            )}
        </>
    );
};
export default TvShowPagination;
