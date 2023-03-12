import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';

const Episode = ({ id, name, episode_number, air_date, still_path, overview }) => {
    return (
        <Card key={id} sx={{ display: 'flex',flexDirection:{xs:'column',sm:'row'}, mb: 2 }}>
            <Avatar variant="rounded" sx={{ width: 227, height: 127 }} src={`https://www.themoviedb.org/t/p/w227_and_h127_bestv2${still_path}`} />
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' ,alignItems:'center'}}>
                    <Typography variant="body1" sx={{ letterSpacing: 1 }} gutterBottom>
                        {`${episode_number} - ${name}`}
                    </Typography>
                    <Typography variant='body2'>{new Date(air_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</Typography>
                </Box>
                <Typography variant="caption" color="text.secondary">{overview}</Typography>
            </CardContent>
        </Card>
    );
}

export default Episode;