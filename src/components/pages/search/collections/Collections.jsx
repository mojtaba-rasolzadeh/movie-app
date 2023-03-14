import { useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { Typography, Avatar, Card, CardActionArea, CardContent, Box } from "@mui/material";
import { getSearchCollections } from "../../../../services/MovieService";
import { Loader } from "../../../constant";
import { grey } from "@mui/material/colors";
import MoviePagination from "../../movie/MoviePagination";

const Collections = ({ collectionsData, query }) => {
  const [loading, setLoading] = useState(false);
  const [collections, setCollections] = useState({ ...collectionsData });

  const handleChangePage = async (page) => {
    try {
      setLoading(true);
      const { status, data } = await getSearchCollections(query, page);
      if (status === 200) {
        setLoading(false);
        setCollections(data);
      }
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  return (
    <>
      {_.isEmpty(collections.results) ? (
        <Typography sx={{ letterSpacing: 1 }}>
          There are no collections that matched your query.
        </Typography>
      ) : (
        <>
          {loading ? (<Loader />) : (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
              {
                collections.results.map((collection) => (
                  <Card key={collection.id} sx={{ display: 'flex!important', alignItems: 'center', width: 420, height: { xs: 'auto', sm: 200 }, p: 1.5, borderRadius: '20px' }}>
                    <CardActionArea sx={{ width: 120, borderRadius: '20px' }}>
                      <Link to={`/collection/${collection.id}`} style={{ textDecoration: 'none' }}>
                        <Avatar variant="rounded" sx={{ width: 120, height: 180, borderRadius: '20px' }} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${collection.poster_path}`} />
                      </Link>
                    </CardActionArea>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 1 }}>
                      <Link to={`/collection/${collection.id}`} style={{ textDecoration: 'none' }}>
                        <Typography variant="body2" sx={{ letterSpacing: 1, color: '#fff', '&:hover': { color: 'text.secondary' }, display: '-webkit-box', textOverflow: 'ellipsis', overflow: 'hidden', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }} >{collection.name}</Typography>
                      </Link>
                      <Typography variant="caption" sx={{ mt: 1, color: 'text.secondary', letterSpacing: 1, display: '-webkit-box', textOverflow: 'ellipsis', overflow: 'hidden', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }} >{_.isEmpty(collection.overview) ? `There is no description for the ${collection.name}.` : collection.overview}</Typography>
                      <Link to={`/collection/${collection.id}`} style={{ textDecoration: 'none' }}>
                        <Typography sx={{ fontSize: '.9rem', textAlign: 'center', textTransform: 'capitalize', letterSpacing: 1, backgroundColor: grey[800], '&:hover': { backgroundImage: 'linear-gradient(to right,#f3001d,#ff004d)' }, color: '#fff', transform: 'skew(-15deg)', borderRadius: '10px', padding: '.5rem .5rem', mt: 1 }}>
                          view more
                        </Typography>
                      </Link>
                    </CardContent>
                  </Card>
                ))
              }
            </Box>
          )}
          <MoviePagination movieData={collections} fetchData={handleChangePage} />
        </>
      )}
    </>
  );
};
export default Collections;