import { Box, Chip, Typography } from '@mui/material';

const CastAndCrewTitle = ({ selectedIndex, castAndCrew }) => {
    return (
        <>
            {
                selectedIndex === 0 ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Typography variant="h5" sx={{
                            fontSize: { xs: '1rem', sm: '1.5rem' },
                            letterSpacing: 1
                        }}>Actors</Typography>
                        <Chip
                            label={
                                <Typography variant="body2">
                                    {castAndCrew.cast?.length}
                                </Typography>
                            }
                            size="small"
                            variant='outlined'
                        />
                    </Box>) : (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Typography variant="h5" sx={{
                            fontSize: { xs: '1rem', sm: '1.5rem' },
                            letterSpacing: 1
                        }}>Crews</Typography>
                        <Chip
                            label={
                                <Typography variant="body2">
                                    {castAndCrew.crew?.length}
                                </Typography>
                            }
                            size="small"
                            variant='outlined'
                        />
                    </Box>
                )
            }
        </>
    );
}

export default CastAndCrewTitle;