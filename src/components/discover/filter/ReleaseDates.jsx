import { useContext } from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Autocomplete,
  TextField,
  Stack,
  AccordionDetails,
  Divider,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DiscoverContext } from "../../../context/DiscoverContext";
import { useEffect } from "react";
import { getListCountries } from "../../../services/MovieService";

const ReleaseDates = () => {
  const {
    countries,
    setCountries,
    countryValue,
    setCountryValue,
    release_date_gte,
    setRelease_date_gte,
    release_date_lte,
    setRelease_date_lte,
  } = useContext(DiscoverContext);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { status, data: countriesData } = await getListCountries();
  //       if (status === 200) {
  //         setCountries(countriesData);
  //       }
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <AccordionDetails>
        <Typography sx={{ fontWeight: "300", color: "text.secondary" }}>
          Release Dates
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label=" 
                    Search all releases?"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="
                    Search all countries?"
          />
        </FormGroup>
        <Stack sx={{ mb: 2 }}>
          <Autocomplete
            id="country-select"
            options={countries}
            sx={{ my: 1 }}
            value={countryValue}
            onChange={(event, newValue) => setCountryValue(newValue)}
            getOptionLabel={(option) => option.native_name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderOption={(props, option) => {
              return (
                <Box
                  key={option.native_name}
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  {/* <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${option.iso_3166_1.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${option.iso_3166_1.toLowerCase()}.png 2x`}
                    alt={option.native_name}
                  /> */}
                  {option.native_name}
                </Box>
              );
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Choose a country" />
            )}
          />
        </Stack>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="from"
              value={release_date_gte}
              onChange={(newValue) => {
                setRelease_date_gte(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="to"
              value={release_date_lte}
              onChange={(newValue) => {
                setRelease_date_lte(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
      </AccordionDetails>
      <Divider />
    </>
  );
};
export default ReleaseDates;
