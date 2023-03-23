import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Input, IconButton } from "@mui/material";
import { SearchRounded } from "@mui/icons-material";

const SearchInput = ({ searchParams }) => {
  const [query, setQuery] = useState(searchParams.get("query"));
  
  const navigate = useNavigate();

  const handleSearchInput = (event) => {

    event.preventDefault();

    if (query.replace(/\s/g, "")) {
      navigate({
        pathname: "/search",
        search: createSearchParams({
          query: query,
        }).toString(),
      });
    } else {
      toast.error("Please enter a value!");
    }
  };

  return (
    <form onSubmit={handleSearchInput}
      style={{ display: "flex", alignItems: "center" }}>
      <Input
        type="search"
        fullWidth
        sx={{ padding: "6px 0 6px 10px", my: 3, letterSpacing: 1 }}
        placeholder="Search for movie. tv show, person..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <IconButton
        type="submit"
        size="large"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchRounded />
      </IconButton>
    </form>
  );
};
export default SearchInput;