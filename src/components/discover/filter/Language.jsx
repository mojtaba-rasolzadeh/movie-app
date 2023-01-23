import { useContext } from "react";
import {
  AccordionDetails,
  Autocomplete,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

import { DiscoverContext } from "../../../context/DiscoverContext";
import { useEffect } from "react";
import { getListLanguages } from "../../../services/MovieService";

const Language = () => {
  const {
    languagesMovieList,
    setLanguagesMovieList,
    languageValue,
    setLanguageValue,
  } = useContext(DiscoverContext);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data: languagesData } = await getListLanguages();
  //       setLanguagesMovieList(languagesData);
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <AccordionDetails>
        <Typography
          sx={{ fontWeight: "300", color: "text.secondary" }}
          gutterBottom
        >
          Language
        </Typography>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={languagesMovieList}
          value={languageValue}
          onChange={(event, newValue) => setLanguageValue(newValue)}
          fullWidth
          renderOption={(params, option) => (
            <li key={option.english_name} {...params}>
              {option.english_name}
            </li>
          )}
          getOptionLabel={(option) => option.english_name}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => (
            <TextField {...params} placeholder="Choose a language" />
          )}
        />
      </AccordionDetails>
      <Divider />
    </>
  );
};
export default Language;
