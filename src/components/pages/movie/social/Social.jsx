import { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Card, Typography } from "@mui/material";
import { deepOrange, grey } from "@mui/material/colors";
import { ExpandMore } from "@mui/icons-material";

import { ReviewsLength, Review } from "./";

const Social = ({ id, title, reviews }) => {
  const [expanded, setExpanded] = useState('panel0');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

  return (
    <Card sx={{ mt: 4, p: 3, borderRadius: '20px' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" gutterBottom>Reviews</Typography>
        <Link
          to={`/movie/${id}-${title?.split(/[\s:,]/)
            .join("-").split("--").join("-").toLowerCase()}/reviews`}
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="body2"
            sx={{
              display: "inline-block",
              fontWeight: "600",
              color: "#fff",
              "&:hover": { color: grey[600] },
            }}
          >
            Read All Reviews
          </Typography>
        </Link>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 2 }}>
        {
          reviews?.results.slice(0, 2).map((review, index) => (
            <Accordion disableGutters expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} sx={{ '&.MuiAccordion-root': { background: '#000', borderRadius: '20px' }, '&.MuiAccordion-root:before': { display: 'none' } }} >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                id={`panel${index}bh-header`}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{
                    width: 54, height: 54,
                    color: "#fff",
                    bgcolor: deepOrange[500],
                  }}
                    alt={review.author}
                    src={`https://www.themoviedb.org/t/p/w64_and_h64_face${review?.author_details.avatar_path}`} />
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        letterSpacing: 1,
                        color: "#fff",
                      }}
                    >
                      {review.author}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        letterSpacing: 1,
                        fontWeight: 700, color: grey[600]
                      }}
                    >
                      {new Date(review.created_at).toLocaleDateString(
                        "en-US",
                        { month: "short", day: "numeric", year: "numeric" }
                      )}
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="span" variant="body2" sx={{ textAlign: 'justify', display: '-webkit-box', textOverflow: 'ellipsis', overflow: 'hidden', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
                  {review.content}
                </Typography>
                <Link to={`/review/${review.id}`} style={{ textDecorationColor: '#fff' }}>
                  <Typography component="span" variant="body2" sx={{ color: '#fff', '&:hover': { color: grey[600] } }}>
                    read the rest.
                  </Typography>
                </Link>
              </AccordionDetails>
            </Accordion>
          ))
        }
      </Box>
    </Card>
  );
};

export default Social;