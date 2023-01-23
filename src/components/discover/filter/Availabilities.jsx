import {
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
  AccordionDetails,
  Divider,
} from "@mui/material";

const Availabilities = () => {
  return (
    <>
      <AccordionDetails>
        <Typography sx={{ fontWeight: "300", color: "text.secondary" }}>
          Availabilities
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Search all availabilities?"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Stream"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Free"
          />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Ads" />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Rent"
          />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Buy" />
        </FormGroup>
      </AccordionDetails>
      <Divider />
    </>
  );
};
export default Availabilities;
