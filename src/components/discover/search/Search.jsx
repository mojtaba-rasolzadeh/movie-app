import { useContext } from "react";
import { Button } from "@mui/material";
import { blue } from "@mui/material/colors";

import { DiscoverContext } from "../../../context/DiscoverContext";

const Search = () => {
    const {sortBy} = useContext(DiscoverContext);

    const handleSearch = () => {
        console.log(sortBy)
    }
  return (
    <Button
      variant="contained"
      fullWidth
      sx={{
        backgroundColor: blue[500],
        color: "#fff",
        letterSpacing: 1,
        fontWeight: 700,
      }}
      onClick={handleSearch}
    >
      Search
    </Button>
  );
};
export default Search;
