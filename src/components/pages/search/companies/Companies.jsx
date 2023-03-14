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
  Typography,
} from "@mui/material";

import { getSearchCompanies } from "../../../../services/MovieService";
import { Loader } from "../../../constant";
import MoviePagination from "../../movie/MoviePagination";

const Companies = ({ companiesData, query }) => {
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState({ ...companiesData });

  const handleChangePage = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getSearchCompanies(query, page);
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
        <>
          {loading ? (
            <Loader />
          ) : (
            <List sx={{ mb: 2 }}>
              {companies.results.map((company) => (
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
          <MoviePagination movieData={companies} fetchData={handleChangePage} />
        </>
      )}
    </>
  );
};
export default Companies;
