import { useState } from "react";
import _ from "lodash";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Stack,
  Pagination,
} from "@mui/material";
import { Link } from "react-router-dom";
import { getSearchKeywords } from "../../../../services/MovieService";
import { Loader } from "../../../constant";

const Keywords = ({ keywordsData, query }) => {
  const [loading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState({ ...keywordsData });
  const [page, setPage] = useState(1);

  const handleChangePage = async (event, value) => {
    setPage(value);
    try {
      setLoading(true);
      const { status, data } = await getSearchKeywords(query, value);
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
        <Stack>
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
          {keywords.total_pages > 1 && (
            <Pagination
              count={keywords.total_pages}
              page={page}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
              sx={{ ".MuiPagination-ul": { justifyContent: "center" } }}
            />
          )}
        </Stack>
      )}
    </>
  );
};
export default Keywords;
