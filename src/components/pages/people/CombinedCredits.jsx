import { Link } from 'react-router-dom';
import _ from "lodash";
import {
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";
import { PlagiarismRounded } from "@mui/icons-material";
import { deepPurple, teal, lightGreen } from "@mui/material/colors";

const CombinedCredits = ({ combinedCredits }) => {
  return (
    <TableContainer component="paper">
      <Table>
        <TableBody>
          {combinedCredits &&
            combinedCredits
              .sort(
                (a, b) => new Date(b.release_date) - new Date(a.release_date)
              )
              .map((movie) => (
                <TableRow key={movie.id}>
                  <TableCell
                    align="left"
                    sx={{
                      width: 24,
                      padding: "8px 16px",
                      color: lightGreen[500],
                      textAlign: "center",
                    }}
                  >
                    {_.isUndefined(movie.release_date)
                      ? _.isEmpty(movie.first_air_date)
                        ? "—"
                        : movie.first_air_date.slice(0, 4)
                      : _.isEmpty(movie.release_date)
                        ? "—"
                        : movie.release_date.slice(0, 4)}
                  </TableCell>
                  <TableCell align="left" padding="none" sx={{ width: 24 }}>
                    <IconButton>
                      <PlagiarismRounded sx={{ color: deepPurple[500] }} />
                    </IconButton>
                  </TableCell>
                  <TableCell align="left">
                    <Link
                      to={`/${movie.media_type === "tv" ? "tv" : "movie"}/${movie.id
                        }`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography component="span" varinat="body1" sx={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: teal[500],
                        "&:hover": { color: teal[700] },
                      }}>
                        {movie.title}
                        {movie.name}
                      </Typography>
                    </Link>
                    {!_.isEmpty(movie.character) && (
                      <>
                        <Typography
                          component="span"
                          variant="subtitle2"
                          sx={{ color: teal[50], mx: 1 }}
                        >
                          as
                        </Typography>
                        <Typography
                          component="span"
                          sx={{ fontWeight: 200, color: teal[100] }}
                        >
                          {movie.character}
                        </Typography>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default CombinedCredits;
