import { Box, styled, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import { Keywords } from "../constant/movie&tvShow";

const MoreDetails = ({
  languagesList,
  original_title,
  status,
  original_language,
  budget,
  revenue,
  keywords,
  credits,
}) => {
  const showName = (job) => {
    return credits?.crew.find((crew) => crew.job.includes(job))?.name;
  };

  const StyledBox = styled(Box)({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  });

  const StyledTypography = styled(Typography)({
    pl: 1,
    letterSpacing: 1,
    fontWeight: 600,
    color: grey[600],
  });

  const jobs = ["Director", "Producer", "Screenplay", "Writer"];

  const moreDetails = [
    {
      title: "Original Title",
      info: original_title,
    },
    {
      title: "Status",
      info: status,
    },
    {
      title: "Budget",
      info: `${budget ? `$${budget?.toLocaleString()}.00` : "-"}`,
    },
    {
      title: "Revenue",
      info: `${revenue ? `$${revenue?.toLocaleString()}.00` : "-"}`,
    },
  ];

  return (
    <Box sx={{ mt: { xs: 4, md: 0 } }}>
      <Typography variant="h6" gutterBottom>
        More Details
      </Typography>
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
        {jobs.map((job, index) => (
          <StyledBox key={index}>
            <Typography variant="body1" sx={{ letterSpacing: 1 }}>
              {job}:
            </Typography>
            <StyledTypography variant="body2">
              {showName(job) ?? "-"}
            </StyledTypography>
          </StyledBox>
        ))}
        <StyledBox>
          <Typography variant="body1" sx={{ letterSpacing: 1 }}>
            Original Language:
          </Typography>
          {languagesList?.map(
            (language, index) =>
              language.iso_639_1 === original_language && (
                <StyledTypography key={index} variant="body2">
                  {language.english_name}
                </StyledTypography>
              )
          )}
        </StyledBox>
        {moreDetails.map((item, index) => (
          <StyledBox key={index}>
            <Typography variant="body1" sx={{ letterSpacing: 1 }}>
              {item.title}:
            </Typography>
            <StyledTypography variant="body2">
              {item.info ?? "-"}
            </StyledTypography>
          </StyledBox>
        ))}
        <Keywords keywords={keywords?.keywords} mediaType="movie" />
      </Box>
    </Box>
  );
};

export default MoreDetails;
