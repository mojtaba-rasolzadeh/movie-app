import _ from "lodash";
import {
  IconButton,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { PlagiarismRounded } from "@mui/icons-material";
import { deepPurple, teal, lightGreen } from "@mui/material/colors";

const MovieCredits = ({ movieCredits }) => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          {movieCredits
            .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
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
                  {_.isEmpty(movie.release_date)
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
                    href={`/movie/${movie.id}`}
                    underline="none"
                    sx={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: teal[500],
                      "&:hover": { color: teal[700] },
                    }}
                  >
                    {movie.title}
                  </Link>
                  {!_.isEmpty(movie.character) && (
                    <>
                      <Typography
                        component="span"
                        variant="subtitle2"
                        sx={{ mx: 1, color: teal[50] }}
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

export default MovieCredits;
