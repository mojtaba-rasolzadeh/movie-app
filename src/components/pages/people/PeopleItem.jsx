import { Link } from "react-router-dom";
import { Typography, Avatar, Box } from "@mui/material";

const PeopleItem = ({ peopleData }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 3,
      }}
    >
      {peopleData.results?.map((person) => (
        <Box
          key={person.id}
          sx={{ position: "relative", width: 220, borderRadius: "20px" }}
        >
          <Avatar
            variant="rounded"
            sx={{ width: 1, height: 330, borderRadius: "20px" }}
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${person.profile_path}`}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: 1,
              backgroundImage:
                "linear-gradient(to top, rgb(32 32 32 / 94%) 60px, rgb(12 11 2 / 0%) 100%)",
              borderRadius: "17px",
            }}
          />
          <Box
            sx={{
              width: 1,
              position: "absolute",
              bottom: 10,
              p: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box sx={{ maxWidth: 200 }}>
              <Link
                to={`/person/${person.id}`}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    letterSpacing: 1,
                    color: "#fff",
                    "&:hover": { color: "text.secondary" },
                  }}
                  gutterBottom
                >
                  {person.name}
                </Typography>
              </Link>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  display: "-webkit-box",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {` ${
                  person.known_for[0]?.media_type === "tv"
                    ? person.known_for[0]?.name
                    : person.known_for[0]?.title
                }`}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default PeopleItem;
