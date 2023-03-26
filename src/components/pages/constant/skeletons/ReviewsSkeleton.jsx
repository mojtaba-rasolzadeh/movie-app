import { Box, Skeleton } from "@mui/material";

const ReviewsSkeleton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
      }}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <Skeleton
          key={item}
          variant="rounded"
          width={1294}
          height={120}
          animation="pulse"
          sx={{ borderRadius: "20px" }}
        />
      ))}
    </Box>
  );
};

export default ReviewsSkeleton;
