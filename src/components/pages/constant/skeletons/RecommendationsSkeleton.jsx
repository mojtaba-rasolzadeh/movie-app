import { Box, Skeleton } from "@mui/material";

const RecommendationsSkeleton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: { xs: "center", md: "flex-start" },
        gap: 3,
      }}
    >
      {[
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      ].map((item) => (
        <Skeleton
          key={item}
          variant="rounded"
          width={160}
          height={240}
          animation="pulse"
          sx={{ borderRadius: "20px" }}
        />
      ))}
    </Box>
  );
};

export default RecommendationsSkeleton;
