import { Link } from "react-router-dom";
import {
  Typography,
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Chip,
} from "@mui/material";
import { lightGreen, yellow } from "@mui/material/colors";

const Crew = ({ castAndCrew }) => {
  let department = [
    ...new Set(
      castAndCrew.crew && castAndCrew.crew.map((x) => x.department).sort()
    ),
  ];

  return (
    <>
      <Divider>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography variant="h5" sx={{ color: yellow[500] }}>
            Crew
          </Typography>
          <Chip
            label={castAndCrew.crew && castAndCrew.crew.length}
            color="error"
            size="small"
          />
        </Box>
      </Divider>
      {department.map((item, index) => (
        <Box key={index} sx={{ mt: 2 }}>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: lightGreen[500], letterSpacing: 1 }}
          >
            {item}
          </Typography>
          {castAndCrew.crew.map((crew, index) =>
            crew.department === item ? (
              <Card key={index} sx={{ display: "flex", mb: 2 }}>
                <CardActionArea sx={{ width: 66, borderRadius: 1 }}>
                  <Link
                    to={`/person/${crew.id}-${crew.name
                      .split(/[\s:,]/)
                      .join("-")
                      .split("--")
                      .join("-")
                      .toLowerCase()}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Avatar
                      variant="rounded"
                      sx={{ width: 66, height: 66 }}
                      src={`https://www.themoviedb.org/t/p/w66_and_h66_face${crew.profile_path}`}
                    />
                  </Link>
                </CardActionArea>
                <CardContent sx={{ p: "12px", paddingBottom: "8px!important" }}>
                  <Link
                    to={`/person/${crew.id}-${crew.name
                      .split(/[\s:,]/)
                      .join("-")
                      .split("--")
                      .join("-")
                      .toLowerCase()}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        letterSpacing: 1,
                        color: "#fff",
                        "&:hover": { color: "text.secondary" },
                      }}
                    >
                      {crew.name}
                    </Typography>
                  </Link>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ letterSpacing: 1 }}
                  >
                    {crew.job}
                  </Typography>
                </CardContent>
              </Card>
            ) : (
              ""
            )
          )}
        </Box>
      ))}
    </>
  );
};

export default Crew;
