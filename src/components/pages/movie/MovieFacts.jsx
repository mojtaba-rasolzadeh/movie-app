import { Box, Typography } from "@mui/material";

const MovieFacts = ({
  languagesList,
  original_title,
  status,
  original_language,
  budget,
  revenue,
}) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>More Details</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 1.5,
          my: 2,
        }}
      >
        {
          original_title &&
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography
              variant="body1"
              sx={{ letterSpacing: 1 }}
            >
              Original Title:
            </Typography>
            <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1, color: 'text.secondary' }}>
              {original_title}
            </Typography>
          </Box>
        }
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            variant="body1"
            sx={{ letterSpacing: 1 }}
          >
            Status:
          </Typography>
          <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1, color: 'text.secondary' }}>
            {status}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            variant="body1"
            sx={{ letterSpacing: 1 }}
          >
            Original Language:
          </Typography>
          {languagesList?.map(
            (language, index) =>
              language.iso_639_1 === original_language && (
                <Typography key={index} variant="body2" sx={{ pl: 1, letterSpacing: 1, color: 'text.secondary' }}>
                  {language.english_name}
                </Typography>
              )
          )}
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            variant="body1"
            sx={{ letterSpacing: 1 }}
          >
            Budget:
          </Typography>
          <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1, color: 'text.secondary' }}>
            {budget <= 0 ? "-" : `$${budget?.toLocaleString()}.00`}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            variant="body1"
            sx={{ letterSpacing: 1 }}
          >
            Revenue:
          </Typography>
          <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1, color: 'text.secondary' }}>
            {revenue <= 0 ? "-" : `$${revenue?.toLocaleString()}.00`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieFacts;