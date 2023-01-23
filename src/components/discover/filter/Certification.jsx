import { useContext } from "react";
import {
  Box,
  Typography,
  Chip,
  AccordionDetails,
  Divider,
} from "@mui/material";

import { DiscoverContext } from "../../../context/DiscoverContext";

const Certification = () => {
  const {
    certificationMovieList,
    certificationSelected,
    setCertificationSelected,
  } = useContext(DiscoverContext);
  const handleSelectionCertification = (item) => {
    const newSet = new Set(certificationSelected);

    if (newSet.has(item)) {
      newSet.delete(item);
    } else {
      newSet.add(item);
    }
    setCertificationSelected(newSet);
  };
  return (
    <>
      <AccordionDetails>
        <Typography sx={{ fontWeight: "300", color: "text.secondary" }}>
          Certification
        </Typography>
        <Box
          role="group"
          sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}
        >
          {certificationMovieList.map((item, index) => (
            <Chip
              key={index}
              variant={certificationSelected.has(item) ? "filled" : "outlined"}
              color={certificationSelected.has(item) ? "primary" : "secondary"}
              label={item}
              onClick={() => handleSelectionCertification(item)}
            />
          ))}
        </Box>
      </AccordionDetails>
      <Divider />
    </>
  );
};
export default Certification;
