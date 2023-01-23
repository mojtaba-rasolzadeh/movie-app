import { useContext } from "react";
import {
  Box,
  Typography,
  Chip,
  AccordionDetails,
  Divider,
} from "@mui/material";

import { DiscoverContext } from "../../../context/DiscoverContext";
import { useEffect } from "react";
import { getGenresMovieList } from "../../../services/MovieService";

const Genres = () => {
  const { genresMovieList,setgenresMovieList, genreSelected, setGenreSelected } =
    useContext(DiscoverContext);

    // console.log([...genreSelected])
  const handleSelectionGenre = (genreId) => {
    const newSet = new Set(genreSelected);

    if (newSet.has(genreId)) {
      newSet.delete(genreId);
    } else {
      newSet.add(genreId);
    }
    setGenreSelected(newSet);
  };

  // useEffect(() => {
  //   const fetchData = async () => {

  //     try{
  //       const { data: genresMovieData } = await getGenresMovieList();
  //       setgenresMovieList(genresMovieData.genres);
  //     }catch(err){
  //       console.log(err.message);
  //     }
  //   }
  //   fetchData();
  // },[])

  return (
    <>
      <AccordionDetails>
        <Typography sx={{ fontWeight: "300", color: "text.secondary" }}>
          Genres
        </Typography>
        <Box
          role="group"
          sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}
        >
          {genresMovieList &&
            genresMovieList.map((item) => (
              <Chip
                key={item.id}
                variant={genreSelected.has(item.id) ? "filled" : "outlined"}
                color={genreSelected.has(item.id) ? "primary" : "secondary"}
                label={item.name}
                onClick={() => handleSelectionGenre(item.id)}
              />
            ))}
        </Box>
      </AccordionDetails>
      <Divider />
    </>
  );
};
export default Genres;
