import { Box, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";

const MovieFacts = ({
  languagesList,
  original_title,
  status,
  original_language,
  budget,
  revenue,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 3,
        my: 4,
      }}
    >
      {
        original_title &&
        <div>
          <Typography
            variant="body1"
            sx={{
              letterSpacing: 2, fontWeight: "700",
              color: yellow[700]
            }}
          >
            Original Title:
          </Typography>
          <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1 }}>
            {original_title}
          </Typography>
        </div>
      }
      <div>
        <Typography
          variant="body1"
          sx={{
            letterSpacing: 2, fontWeight: "700",
            color: yellow[700]
          }}
        >
          Status:
        </Typography>
        <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1 }}>
          {status}
        </Typography>
      </div>
      <div>
        <Typography
          variant="body1"
          sx={{
            letterSpacing: 2, fontWeight: "700",
            color: yellow[700]
          }}
        >
          Original Language:
        </Typography>
        {languagesList.map(
          (language, index) =>
            language.iso_639_1 === original_language && (
              <Typography key={index} variant="body2" sx={{ pl: 1, letterSpacing: 1 }}>
                {language.english_name}
              </Typography>
            )
        )}
      </div>
      <div>
        <Typography
          variant="body1"
          sx={{
            letterSpacing: 2, fontWeight: "700",
            color: yellow[700]
          }}
        >
          Budget:
        </Typography>
        <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1 }}>
          {budget <= 0 ? "-" : `$${budget?.toLocaleString()}.00`}
        </Typography>
      </div>
      <div>
        <Typography
          variant="body1"
          sx={{
            letterSpacing: 2, fontWeight: "700",
            color: yellow[700]
          }}
        >
          Revenue:
        </Typography>
        <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1 }}>
          {revenue <= 0 ? "-" : `$${revenue?.toLocaleString()}.00`}
        </Typography>
      </div>
    </Box>
  );
};

export default MovieFacts;