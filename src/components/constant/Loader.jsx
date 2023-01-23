import { Box } from "@mui/material";
import { purple } from "@mui/material/colors";
import { ScaleLoader } from "react-spinners";

const Loader = ({ height }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: height ? height : "80vh",
        justifyContent: "center",
        placeItems: "center",
      }}
    >
      <ScaleLoader
        color={purple[600]}
        size={20}
        aria-label="Loading Spinners"
        data-testid="loader"
      />
    </Box>
  );
};
export default Loader;
