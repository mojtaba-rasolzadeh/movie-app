import { useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import {
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { getSearchCompanies } from "../../../../services/MovieService";
import { Loader } from "../../../constant";

const Companies = ({ companiesData, query }) => {
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState({ ...companiesData });
  const [page, setPage] = useState(1);

  const handleChangePage = async (event, value) => {
    setPage(value);
    try {
      setLoading(true);
      const { status, data } = await getSearchCompanies(query, value);
      if (status === 200) {
        setLoading(false);
        setCompanies(data);
      }
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  return (
    <>
      {_.isEmpty(companies.results) ? (
        <Typography sx={{ letterSpacing: 1 }}>
          There are no companies that matched your query.
        </Typography>
      ) : (
        <Stack>
          {loading ? (
            <Loader />
          ) : (
            <List sx={{ mb: 2 }}>
              {companies.results.map((company, index) => (
                <Box key={company.id}>
                  <Link
                    to={`/company/${company.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <ListItem disablePadding disableGutters>
                      <ListItemButton>
                        <ListItemText
                          primary={
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                              }}
                            >
                              <Typography color="whitesmoke">
                                {company.name}
                              </Typography>
                              {!_.isEmpty(company.origin_country) && (
                                <Chip
                                  label={company.origin_country}
                                  color="error"
                                  size="small"
                                />
                              )}
                            </Box>
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
          {companies.total_pages > 1 && (
            <Pagination
              count={companies.total_pages}
              page={page}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
              sx={{
                ".MuiPagination-ul": { justifyContent: "center" },
              }}
            />
          )}
        </Stack>
      )}
    </>
  );
};
export default Companies;
