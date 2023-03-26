import { Box, Skeleton } from "@mui/material";

const MovieAndTvShowSkeleton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 3,
      }}
    >
      {[
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      ].map((item) => (
        <Skeleton
          key={item}
          variant="rounded"
          width={219}
          height={330}
          animation="pulse"
          sx={{ borderRadius: "20px" }}
        />
      ))}
    </Box>
  );
};

export default MovieAndTvShowSkeleton;
