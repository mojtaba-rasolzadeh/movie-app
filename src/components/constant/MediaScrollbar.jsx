import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const MediaScrollbar = ({ children, gap, width, disableEqualOverflow }) => {

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        width: "100%",
        "& > div": {
          overflow: "auto hidden",
          "&::-webkit-scrollbar": {
            height: 8,
            WebkitAppearance: "none",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            border: "2px solid",
            borderColor: theme.palette.mode === "dark" ? "#DBDBDB" : "#E7EBE0",
            backgroundColor: "rgba(211, 211, 211, 1)",
          },
        },
      })}
    >
      <div>
        <Grid
          container
          sx={{ padding: 0, maxWidth: width ? width : 1573, width: width ? width : 1573 }}
          disableEqualOverflow
        >
          <Grid xs={12} sx={{ display: "flex", gap: gap, mb: 3 }}>
            {children}
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};
export default MediaScrollbar;
