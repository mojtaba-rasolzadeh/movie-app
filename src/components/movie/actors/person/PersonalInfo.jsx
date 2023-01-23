import _ from "lodash";
import { Box, Typography, Divider } from "@mui/material";
import { amber, lime } from "@mui/material/colors";

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
        <Typography variant="h5" sx={{ fontWeight: 700, color: amber[500] }}>
          Personal Info
        </Typography>
      </Divider>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 4 }}>
        <Box>
          <Typography sx={{ fontWeight: 800, color: lime[500] }}>
            Known For
          </Typography>
          <Typography variant="body2" sx={{ color: lime[100] }}>
            {_.isEmpty(known_for_department) ? "-" : known_for_department}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 800, color: lime[500] }}>
            Known Credits
          </Typography>
          <Typography variant="body2" sx={{ color: lime[100] }}>
            {_.isEmpty(combined_credits.cast)
              ? "-"
              : combined_credits.cast.length}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 800, color: lime[500] }}>
            Gender
          </Typography>
          <Typography variant="body2" sx={{ color: lime[100] }}>
            {gender === 0 ? "-" : gender === 1 ? "Female" : "Male"}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 800, color: lime[500] }}>
            Birthday
          </Typography>
          <Typography variant="body2" sx={{ color: lime[100] }}>
            {_.isEmpty(birthday)
              ? "-"
              : `${birthday} ( ${calculateAge(birthday)} years old )`}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 800, color: lime[500] }}>
            Place of Birth
          </Typography>
          <Typography variant="body2" sx={{ color: lime[100] }}>
            {_.isEmpty(place_of_birth) ? "-" : place_of_birth}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 800, color: lime[500] }}>
            Also Known As
          </Typography>
          {_.isEmpty(also_known_as)
            ? "-"
            : also_known_as.map((item, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{ color: lime[100], my: 1 }}
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
