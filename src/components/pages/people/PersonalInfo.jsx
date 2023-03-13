import _ from "lodash";
import { Box, Typography, Divider } from "@mui/material";
import { yellow } from "@mui/material/colors";

const PersonalInfo = ({
  known_for_department,
  gender,
  birthday,
  place_of_birth,
  also_known_as,
  combined_credits,
}) => {

  const calculateAge = (birthday) => {
    let ageDifMs = Date.now() - new Date(birthday).getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <Box>
      <Divider>
        <Typography variant="h5" sx={{
          fontWeight: 700,
          background: 'linear-gradient(to right,#ED4700,#E76F00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: 1,
        }}>
          Personal Info
        </Typography>
      </Divider>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 4 }}>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: 700, letterSpacing: 1, color: yellow[700] }}>
            Known For:
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }} >
            {_.isEmpty(known_for_department) ? "-" : known_for_department}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: 700, letterSpacing: 1, color: yellow[700] }}>
            Known Credits:
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }}>
            {_.isEmpty(combined_credits)
              ? "-"
              : combined_credits?.cast.length}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: 700, letterSpacing: 1, color: yellow[700] }}>
            Gender:
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }}>
            {gender === 0 ? "-" : gender === 1 ? "Female" : "Male"}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: 700, letterSpacing: 1, color: yellow[700] }}>
            Birthday:
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }}>
            {_.isEmpty(birthday)
              ? "-"
              : `${birthday} ( ${calculateAge(birthday)} years old )`}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: 700, letterSpacing: 1, color: yellow[700] }}>
            Place of Birth:
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }}>
            {_.isEmpty(place_of_birth) ? "-" : place_of_birth}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: 700, letterSpacing: 1, color: yellow[700] }}>
            Also Known As:
          </Typography>
          {_.isEmpty(also_known_as)
            ? "-"
            : also_known_as.map((item, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{ my: 1, pl: 1 }}
              >
                {item}
              </Typography>
            ))}
        </Box>
      </Box>
      <Divider sx={{ display: { xs: "block", sm: "none" }, my: 4 }} />
    </Box>
  );
};
export default PersonalInfo;
