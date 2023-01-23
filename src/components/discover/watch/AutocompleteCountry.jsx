import { Box, Autocomplete, TextField } from "@mui/material";
import { useEffect } from "react";
import { useContext } from "react";
import { DiscoverContext } from "../../../context/DiscoverContext";
import { getListCountriesWatchProvider } from "../../../services/MovieService";

const AutocompleteCountry = () => {
  const {
    watchCountry,
    setWatchCountry,
    watchCountryValue,
    setWatchCountryValue,
  } = useContext(DiscoverContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } =
          await getListCountriesWatchProvider();
        setWatchCountry(data.results);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);
  return (
    <Autocomplete
      id="watchCountry-select"
      options={watchCountry}
      value={watchCountryValue}
      onChange={(event, newValue) => setWatchCountryValue(newValue)}
      getOptionLabel={(option) => option.native_name}
      renderOption={(props, option) => (
        <Box
          key={option.native_name}
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.iso_3166_1.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.iso_3166_1.toLowerCase()}.png 2x`}
            alt={option.english_name}
          />
          {option.english_name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField {...params} placeholder="Choose a country" />
      )}
    />
  );
};
export default AutocompleteCountry;
