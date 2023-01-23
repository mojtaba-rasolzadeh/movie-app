import _ from "lodash";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Link,
  IconButton,
  Typography,
} from "@mui/material";
import { Preview, PlagiarismRounded } from "@mui/icons-material";
import {
  teal,
  lightGreen,
  yellow,
  orange,
  lime,
  green,
  blueGrey,
  deepPurple,
} from "@mui/material/colors";

const TvCredits = ({ tvCredits }) => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          {tvCredits
            .sort(
              (a, b) => new Date(b.first_air_date) - new Date(a.first_air_date)
            )
            .map((tv) => (
              <TableRow key={tv.id}>
                <TableCell
                  align="left"
                  sx={{
                    width: 24,
                    padding: "8px 16px",
                    color: lightGreen[500],
                    textAlign:'center'
                  }}
                >
                  {_.isEmpty(tv.first_air_date)
                    ? "—"
                    : tv.first_air_date.slice(0, 4)}
                </TableCell>
                <TableCell align="left" padding="none" sx={{ width: 24 }}>
                  <IconButton>
                    <PlagiarismRounded sx={{ color: deepPurple[500] }} />
                  </IconButton>
                </TableCell>
                <TableCell align="left">
                  <Link
                    href={`/tv/${tv.id}`}
                    underline="none"
                    sx={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: teal[500],
                      "&:hover": { color: teal[700] },
                    }}
                  >
                    {tv.name}
                  </Link>
                  {!_.isEmpty(tv.character) && (
                    <>
                      <Typography
                        variant="subtitle2"
                        component="span"
                        sx={{ mx: 1, color: teal[50] }}
                      >
                        as
                      </Typography>
                      <Typography
                        component="span"
                        sx={{ fontWeight: 200, color: teal[100] }}
                      >
                        {tv.character}
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
export default TvCredits;
