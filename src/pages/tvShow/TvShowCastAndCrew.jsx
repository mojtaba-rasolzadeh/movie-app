import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";

import { Loader } from "../../components/constant";
import { getTv } from "../../services/MovieService";
import Actors from "../../components/pages/tvShows/Actors";
import Crew from "../../components/pages/tvShows/Crew";
import BackToMain from "../../components/constant/BackToMain";

const TvShowCastAndCrew = () => {
    const { tvId } = useParams();
    const [loading, setLoading] = useState(false);
    const [tvShow, setTvshow] = useState([]);
    const [castAndCrew, setCastAndCrew] = useState([]);

    console.log(castAndCrew);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { status, data } = await getTv(parseInt(tvId));
                if (status === 200) {
                    setLoading(false);
                    setTvshow(data);
                    setCastAndCrew(data.aggregate_credits);
                }
            } catch (err) {
                setLoading(false);
                console.log(err.message);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <BackToMain media_data={tvShow} media_type="tv" searchParams={tvId} />
                    <Grid container spacing={3} sx={{ my: 2 }}>
                        <Grid xs={6}>
                            <Actors castAndCrew={castAndCrew} />
                        </Grid>
                        <Grid xs={6}>
                            <Crew castAndCrew={castAndCrew} />
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    );
};

export default TvShowCastAndCrew;
