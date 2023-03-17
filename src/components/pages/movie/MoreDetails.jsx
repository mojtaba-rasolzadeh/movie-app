import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import Keywords from "./Keywords";

const MoreDetails = ({
  languagesList,
  original_title,
  status,
  original_language,
  budget,
  revenue,
  keywords,
  credits
}) => {

  const showJob = (job) => {
    // console.log(credits?.crew.filter((crew) => crew.department === job));
    console.log(credits?.crew.find((crew) => crew.job === job)?.name);
    return credits?.crew.find((crew) => crew.job.includes(job))?.name;
  }

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
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            variant="body1"
            sx={{ letterSpacing: 1 }}
          >
            Director:
          </Typography>
          <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1, fontWeight: 600, color: grey[600] }}>
            {showJob('Director')}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            variant="body1"
            sx={{ letterSpacing: 1 }}
          >
            Producer:
          </Typography>
          <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1, fontWeight: 600, color: grey[600] }}>
            {showJob('Producer')}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            variant="body1"
            sx={{ letterSpacing: 1 }}
          >
            Screenplay:
          </Typography>
          <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1, fontWeight: 600, color: grey[600] }}>
            {showJob('Screenplay')}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            variant="body1"
            sx={{ letterSpacing: 1 }}
          >
            Writer:
          </Typography>
          <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1, fontWeight: 600, color: grey[600] }}>
            {showJob('Writer')}
          </Typography>
        </Box>
        {
          original_title &&
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography
              variant="body1"
              sx={{ letterSpacing: 1 }}
            >
              Original Title:
            </Typography>
            <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1, fontWeight: 600, color: grey[600] }}>
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
          <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1, fontWeight: 600, color: grey[600] }}>
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
                <Typography key={index} variant="body2" sx={{ pl: 1, letterSpacing: 1, fontWeight: 600, color: grey[600] }}>
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
          <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1, fontWeight: 600, color: grey[600] }}>
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
          <Typography variant="body2" sx={{ pl: 1, letterSpacing: 1, fontWeight: 600, color: grey[600] }}>
            {revenue <= 0 ? "-" : `$${revenue?.toLocaleString()}.00`}
          </Typography>
        </Box>
        <Keywords keywords={keywords} />
      </Box>
    </Box>
  );
};

export default MoreDetails;