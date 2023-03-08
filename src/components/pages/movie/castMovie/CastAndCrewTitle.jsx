import { Box, Typography } from '@mui/material';

const CastAndCrewTitle = ({ selectedIndex, castAndCrew }) => {
    return (
        <>
            {
                selectedIndex === 0 ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Typography variant='h5' sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>actors</Typography>
                        <Typography variant='body2' color='text.secondary' sx={{ mt: '6px' }}>{castAndCrew.cast?.length}</Typography>
                    </Box>) : (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Typography variant='h5' sx={{ textTransform: 'capitalize', letterSpacing: 1 }}>crews</Typography>
                        <Typography variant='body2' color='text.secondary' sx={{ mt: '6px' }}>{castAndCrew.crew?.length}</Typography>
                    </Box>
                )
            }
        </>
    );
}

export default CastAndCrewTitle;