import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { IconButton, InputBase, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import { SearchRounded } from "@mui/icons-material";
import { toast } from "react-hot-toast";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 200,
  border: `1px solid ${grey[600]}`,
  width: "100%",
  display: "flex",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "&.MuiInputBase-root": { width: "100%" },
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 3),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

const SearchInput = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    if (query?.replace(/\s/g, "")) {
      navigate({
        pathname: "/search",
        search: createSearchParams({
          query: query,
        }).toString(),
      });
      setQuery("");
    } else {
      toast.error("Please enter a value!");
    }
  };

  return (
    <Search>
      <form
        onSubmit={handleSearch}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <StyledInputBase
          placeholder="Search for a movie, tv show..."
          inputProps={{ "aria-label": "search" }}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px", color: grey[500] }}
          aria-label="search"
        >
          <SearchRounded />
        </IconButton>
      </form>
    </Search>
  );
};
export default SearchInput;
