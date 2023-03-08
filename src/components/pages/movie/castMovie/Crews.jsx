import { Typography, Box } from "@mui/material";
import Crew from "./Crew";

const Crews = ({ castAndCrew }) => {
  
  let department = [...new Set(castAndCrew?.crew.map((x) => x.department).sort())];

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3,mt: 4 }}>
      {department.map((item, index) => (
        <Box key={index} sx={{ mt: 2 }}>
          <Typography variant="h6" sx={{ letterSpacing: 1, mb: 2 }}>
            {item}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {castAndCrew.crew.map((crew, index) => crew.department === item && (<Crew key={index} {...crew} />))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Crews;