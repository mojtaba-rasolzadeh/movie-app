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
            {tvShowData && tvShowData.total_pages > 1 && (
                <Pagination
                    count={tvShowData && tvShowData.total_pages > 500 ? 500 : tvShowData.total_pages}
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
export default TvShowPagination;
