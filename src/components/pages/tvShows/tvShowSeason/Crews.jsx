import { Typography, Box } from "@mui/material";

import Crew from "./Crew";

const Crews = ({ crew}) => {
  
  let department = [...new Set(crew?.map((x) => x.department).sort())];

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3,mt: 2 }}>
      {department.map((item, index) => (
        <Box key={index} sx={{ mt: 2 }}>
          <Typography variant="h6" sx={{ letterSpacing: 1, mb: 2 }}>
            {item}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {crew?.map((user, index) => user.department === item && (<Crew key={index} {...user} />))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Crews;