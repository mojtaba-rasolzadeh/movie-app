import { Box, Skeleton } from "@mui/material";

const CollectionsSkeleton = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3
        }}>
            {
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((item) => (
                    <Skeleton key={item}
                        variant="rounded"
                        width={420}
                        height={200}
                        animation="pulse"
                        sx={{ borderRadius: '20px' }} />
                ))
            }
        </Box>
    );
}

export default CollectionsSkeleton;