import { Link } from "react-router-dom";
import { Box, styled, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import { Keywords } from "../constant/movie&tvShow";

const MoreDetails = ({
  status,
  networks,
  type,
  original_language,
  languagesList,
  keywords,
  created_by,
}) => {
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
        <StyledBox>
          <Typography variant="body1" sx={{ letterSpacing: 1 }}>
            Creator:
          </Typography>
          <Box>
            {created_by?.map((user) => (
              <Typography
                key={user.id}
                variant="body2"
                sx={{
                  textAlign: "right",
                  letterSpacing: 1,
                  fontWeight: 600,
                  color: grey[600],
                }}
              >
                {user.name}
              </Typography>
            ))}
          </Box>
        </StyledBox>
        <StyledBox>
          <Typography variant="body1" sx={{ letterSpacing: 1 }}>
            Status:
          </Typography>
          <StyledTypography>{status}</StyledTypography>
        </StyledBox>
        <StyledBox>
          <Typography variant="body1" sx={{ letterSpacing: 1 }}>
            Type:
          </Typography>
          <StyledTypography>{type}</StyledTypography>
        </StyledBox>
        <StyledBox>
          <Typography variant="body1" sx={{ letterSpacing: 1 }}>
            Original Language:
          </Typography>
          {languagesList?.map(
            (language, index) =>
              language.iso_639_1 === original_language && (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    pl: 1,
                    letterSpacing: 1,
                    fontWeight: 600,
                    color: grey[600],
                  }}
                >
                  {language.english_name}
                </Typography>
              )
          )}
        </StyledBox>
        <StyledBox>
          <Typography variant="body1" sx={{ letterSpacing: 1 }}>
            Networks:
          </Typography>
          <Box>
            {networks?.map((network) => (
              <Link
                key={network.id}
                to={`/network/${network.id}`}
                style={{ textDecoration: "none" }}
              >
                <img
                  loading="lazy"
                  style={{
                    maxWidth: "260px",
                    width: "100%",
                    height: "30px",
                  }}
                  alt={network.name}
                  src={`https://www.themoviedb.org/t/p/h30${network.logo_path}`}
                  srcSet={`https://www.themoviedb.org/t/p/h30${network.logo_path} 1x,
                                    https://www.themoviedb.org/t/p/h30${network.logo_path} 2x`}
                />
              </Link>
            ))}
          </Box>
        </StyledBox>
        <Keywords keywords={keywords?.results} mediaType="tv" />
      </Box>
    </Box>
  );
};

export default MoreDetails;
