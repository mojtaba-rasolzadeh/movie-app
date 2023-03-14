import { useState } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import { getSearchKeywords } from "../../../../services/MovieService";
import { Loader } from "../../../constant";
import MoviePagination from "../../movie/MoviePagination";

const Keywords = ({ keywordsData, query }) => {
  const [loading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState({ ...keywordsData });

  const handleChangePage = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getSearchKeywords(query, page);
      if (status === 200) {
        setLoading(false);
        setKeywords(data);
      }
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  return (
    <>
      {_.isEmpty(keywords.results) ? (
        <Typography sx={{ letterSpacing: 1 }}>
          There are no keywords that matched your query.
        </Typography>
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
            <List sx={{ mb: 2 }}>
              {keywords.results.map((keyword) => (
                <Box key={keyword.id}>
                  <Link
                    to={`/keyword/${keyword.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText
                          primary={
                            <Typography color="whitesmoke">
                              {keyword.name}
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Divider />
                </Box>
              ))}
            </List>
          )}
          <MoviePagination movieData={keywords} fetchData={handleChangePage} />
        </>
      )}
    </>
  );
};
export default Keywords;