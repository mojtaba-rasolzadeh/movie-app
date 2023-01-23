import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Avatar,
} from "@mui/material";

const People = ({ personData }) => {
  return (
    <>
      {personData.results !== undefined &&
        personData.results.map((person) => (
          <Card key={person.id} sx={{ maxWidth: 235 }}>
            <CardActionArea sx={{ maxWidth: 235 }}>
              <Link
                to={`/person/${person.id}`}
                style={{ textDecoration: "none" }}
              >
                <Avatar
                  variant="square"
                  sx={{ width: 235, height: 235 }}
                  src={`https://www.themoviedb.org/t/p/w235_and_h235_face${person.profile_path}`}
                />
              </Link>
            </CardActionArea>
            <CardContent>
              <Link
                to={`/person/${person.id}`}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#fff",
                    "&:hover": { color: "text.secondary" },
                  }}
                  gutterBottom
                >
                  {person.name}
                </Typography>
              </Link>
              {person.known_for.map((item, index) => (
                <Typography
                  key={item.id}
                  variant="caption"
                  color="text.secondary"
                >
                  {`${index ? "," : ""} ${
                    item.media_type === "tv" ? item.name : item.title
                  }`}
                </Typography>
              ))}
            </CardContent>
          </Card>
        ))}
    </>
  );
};

export default People;
