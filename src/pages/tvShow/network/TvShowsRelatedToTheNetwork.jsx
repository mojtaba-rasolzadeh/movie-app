import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Box, Typography, Chip, Link } from "@mui/material";
import { LinkRounded, PlaceRounded, PublicRounded } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

import { getNetworkDtails, getTvShowsRelatedToTheNetwork } from "../../../services/MovieService";
import TvShowPagination from "../../../components/pages/tvShows/TvShowPagination";
import TvShowItem from "../../../components/pages/tvShows/TvShowItem";
import MovieAndTvShowSkeleton from "../../../components/pages/constant/skeletons/MovieAndTvShowSkeleton";

const TvShowsRelatedToTheNetwork = () => {
    const { networkId } = useParams();
    const [loading, setLoading] = useState(false);
    const [tvShows, setTvShows] = useState([]);
    const [network, setNetwork] = useState({});

    const fetchData = async (page) => {
        try {
            setLoading(true);
            const { status, data } = await getTvShowsRelatedToTheNetwork(networkId, page);
            const { data: networkData } = await getNetworkDtails(networkId);
            if (status === 200) {
                setLoading(false);
                setTvShows(data);
                setNetwork(networkData);
            }
        } catch (err) {
            setLoading(false);
            console.log(err.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Box sx={{ py: 4 }}>
            {loading ? (<MovieAndTvShowSkeleton />) : (
                <>
                    <Helmet>
                        <title>TV Shows on {`${network.name}`} | Movie App</title>
                    </Helmet>
                    <Box sx={{
                        display: "flex",
                        flexWrap: 'wrap',
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 3
                    }}>
                        <img src={`https://www.themoviedb.org/t/p/h50_filter(negate,000,666)${network?.logo_path}`}
                            srcSet={`https://www.themoviedb.org/t/p/h50_filter(negate,000,666)${network?.logo_path} 1x ,
                     https://www.themoviedb.org/t/p/h50_filter(negate,000,666)${network?.logo_path}2x`}
                            alt={network?.name}
                            style={{ maxHeight: 50 }} />
                        {tvShows.total_results && (
                            <Chip
                                label={
                                    <Typography variant="body1">
                                        {tvShows.total_results?.toLocaleString()}{" "}
                                        shows
                                    </Typography>
                                }
                                variant='outlined'
                            />
                        )}
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: 3,
                        mb: 4
                    }}>
                        <Typography variant="h6" sx={{ letterSpacing: 1 }}>
                            {network?.name}
                        </Typography>
                        {
                            network?.headquarters &&
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: .5 }}>
                                <PlaceRounded sx={{ color: grey[600] }} />
                                <Typography variant="body1" sx={{
                                    fontWeight: 700,
                                    color: grey[600]
                                }}>{network?.headquarters}</Typography>
                            </Box>
                        }
                        {
                            network?.origin_country &&
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: .5 }}>
                                <PublicRounded sx={{ color: grey[600] }} />
                                <Typography variant="body1" sx={{
                                    fontWeight: 700,
                                    color: grey[600]
                                }}>{network?.origin_country}</Typography>
                            </Box>
                        }
                        {
                            network?.homepage &&
                            <Link href={network?.homepage} underline="none" target="_blank" sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                color: grey[600],
                                '&:hover': { color: '#fff' }
                            }}>
                                <LinkRounded />
                                <Typography variant="body1" sx={{ fontWeight: 700 }}>Homepage</Typography>
                            </Link>
                        }
                    </Box>
                    <TvShowItem tvShowData={tvShows} />
                </>
            )}
            <TvShowPagination fetchData={fetchData} tvShowData={tvShows} />
        </Box>
    );
};
export default TvShowsRelatedToTheNetwork;
