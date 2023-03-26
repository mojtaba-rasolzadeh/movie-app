import _ from "lodash";
import { Box, Typography, Divider } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";

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
    <Box sx={{ mt: 4 }}>
      <Divider>
        <Typography variant="h5" sx={{ letterSpacing: 1 }}>
          Personal Info
        </Typography>
      </Divider>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 4 }}>
        <Box>
          <Typography variant="body1" sx={{ letterSpacing: 1 }}>
            Known For:
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600, color: grey[600] }} >
            {_.isEmpty(known_for_department) ? "-" : known_for_department}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ letterSpacing: 1 }}>
            Known Credits:
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600, color: grey[600] }}>
            {_.isEmpty(combined_credits)
              ? "-"
              : combined_credits?.cast.length}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ letterSpacing: 1 }}>
            Gender:
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600, color: grey[600] }}>
            {gender === 0 ? "-" : gender === 1 ? "Female" : "Male"}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ letterSpacing: 1 }}>
            Birthday:
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600, color: grey[600] }}>
            {_.isEmpty(birthday)
              ? "-"
              : `${birthday} ( ${calculateAge(birthday)} years old )`}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ letterSpacing: 1 }}>
            Place of Birth:
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600, color: grey[600] }}>
            {_.isEmpty(place_of_birth) ? "-" : place_of_birth}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ letterSpacing: 1 }}>
            Also Known As:
          </Typography>
          {_.isEmpty(also_known_as)
            ? "-"
            : also_known_as.map((item, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{ my: 1, fontWeight: 600, color: grey[600] }}
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
