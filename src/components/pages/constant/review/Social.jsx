import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

import {
  ReadTheRest,
  ReadAllReviews,
  AuthorAvatar,
  AuthorDetails,
  ReviewContent,
} from "./";

const Social = ({ mediaType, mediaId, mediaTitle, reviews }) => {
  const [expanded, setExpanded] = useState("panel0");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Card sx={{ mt: 4, p: 3, borderRadius: "20px" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Reviews
        </Typography>
        {reviews?.results.length > 0 && (
          <ReadAllReviews
            mediaType={mediaType}
            mediaId={mediaId}
            mediaTitle={mediaTitle}
          />
        )}
      </Box>
      {reviews?.results.length <= 0 ? (
        <Typography
          variant="body2"
          sx={{
            color: grey[600],
            fontWeight: 600,
          }}
        >
          {`We don't have any reviews for ${mediaTitle}.`}
        </Typography>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mt: 2 }}>
          {reviews?.results.slice(0, 2).map((review, index) => (
            <Accordion
              key={index}
              disableGutters
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                "&.MuiAccordion-root": {
                  background: "#000",
                  borderRadius: "20px",
                },
                "&.MuiAccordion-root:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                id={`panel${index}bh-header`}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <AuthorAvatar {...review} size={54} />
                  <AuthorDetails {...review} />
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <ReviewContent {...review} />
                <ReadTheRest {...review} />
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      )}
    </Card>
  );
};

export default Social;
