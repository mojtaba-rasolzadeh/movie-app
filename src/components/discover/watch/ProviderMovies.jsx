import { useContext } from "react";
import { Box, Avatar, Tooltip, CardActionArea } from "@mui/material";
import { Verified } from "@mui/icons-material";

import { orange } from "@mui/material/colors";

import { DiscoverContext } from "../../../context/DiscoverContext";
import { useEffect } from "react";
import { getWatchProviderMovies } from "../../../services/MovieService";

const ProviderMovies = () => {
  const {
    watchProviderMovies,
    setWatchProviderMovies,
    watchProviderMoviesSelected,
    setWatchProviderMoviesSelected,
  } = useContext(DiscoverContext);

  const handleSelectionProviderMovie = (providerId) => {
    const newSet = new Set(watchProviderMoviesSelected);

    if (newSet.has(providerId)) {
      newSet.delete(providerId);
    } else {
      newSet.add(providerId);
    }

    setWatchProviderMoviesSelected(newSet);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await getWatchProviderMovies();
  //       setWatchProviderMovies(data.results);
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
      {watchProviderMovies &&
        watchProviderMovies.map((item) => (
          <Tooltip
            key={item.provider_id}
            title={item.provider_name}
            placement="top"
            arrow
          >
            <CardActionArea
              sx={{
                width: 50,

                borderRadius: 1,
              }}
            >
              <Avatar
                variant="rounded"
                sx={{
                  width: 50,
                  height: 50,
                }}
                src={`https://www.themoviedb.org/t/p/original${item.logo_path}`}
                onClick={() => handleSelectionProviderMovie(item.provider_id)}
              />

              <Box
                sx={{
                  display: `${
                    watchProviderMoviesSelected.has(item.provider_id)
                      ? "flex"
                      : "none"
                  }`,
                  position: "absolute",
                  background: "rgba(10,25,41,0.9)",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  borderRadius: "3px",

                  justifyContent: "center",
                  placeItems: "center",
                }}
                onClick={() => handleSelectionProviderMovie(item.provider_id)}
              >
                <Verified sx={{ color: orange[500] }} />
              </Box>
            </CardActionArea>
          </Tooltip>
        ))}
    </Box>
  );
};
export default ProviderMovies;
