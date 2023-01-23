import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Input,
  IconButton,
  OutlinedInput,
  Box,
  InputAdornment,
} from "@mui/material";
import {
  DoDisturbOnRounded,
  SearchRounded,
  TravelExplore,
} from "@mui/icons-material";
import { amber, blueGrey, orange } from "@mui/material/colors";

export const SearchInputStandard = ({ searchParams }) => {
  const [query, setQuery] = useState(searchParams.get("query"));
  const navigate = useNavigate();

  const handleSearchInput = () => {
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
    <>
      <Input
        type="search"
        fullWidth
        sx={{ padding: "6px 0 6px 10px", my: 3, letterSpacing: 1 }}
        placeholder="Search for movie. tv show, person..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <IconButton
        type="button"
        size="large"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={handleSearchInput}
      >
        <SearchRounded />
      </IconButton>
    </>
  );
};

export const SearchInputRounded = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 10,
      }}
    >
      <OutlinedInput
        type="search"
        placeholder="Search for a movie, tv show, person...."
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
        fullWidth
        sx={{
          backgroundColor: blueGrey[500],
          fontWeight: "700",
          borderRadius: 10,
          pl: 2,
          letterSpacing: 2,
        }}
        endAdornment={
          <InputAdornment position="start">
            <IconButton
              type="button"
              size="large"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={handleSearch}
            >
              <SearchRounded />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
};

export const SearchInputOutlined = ({ handleClose }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.replace(/\s/g, "")) {
      navigate({
        pathname: "/search",
        search: createSearchParams({
          query: query,
        }).toString(),
      });
      handleClose();
      setQuery("");
    } else {
      toast.error("Please enter a value!");
    }
  };
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <OutlinedInput
        type="search"
        placeholder="Search for a movie, tv show, person...."
        fullWidth
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <SearchRounded sx={{ color: orange[500] }} />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleSearch} sx={{ color: amber[500] }}>
              <TravelExplore fontSize="large" />
            </IconButton>
          </InputAdornment>
        }
        color="warning"
        sx={{
          backgroundColor: "#0A1929",
          padding: ".5rem 1rem",
          letterSpacing: 2,
          border: "1px solid #132f4c",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          ".MuiOutlinedInput-root": {
            border: "1px solid #132f4c",
          },
        }}
      />
      <IconButton
        color="error"
        onClick={handleClose}
        sx={{ position: "absolute", top: "-6px", right: "21px" }}
      >
        <DoDisturbOnRounded />
      </IconButton>
    </Box>
  );
};
