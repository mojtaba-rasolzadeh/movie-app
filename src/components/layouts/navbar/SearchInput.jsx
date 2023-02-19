import { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { Box, IconButton, InputBase } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Search } from '@mui/icons-material';
import { toast } from 'react-hot-toast';

const SearchInput = () => {

    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (query.replace(/\s/g, "")) {
            navigate({
                pathname: "/search",
                search: createSearchParams({
                    query: query,
                }).toString(),
            });
            setQuery("");
        } else {
            toast.error("Please enter a value!");
        }
    };

    return (
        <Box
            sx={{ maxWidth: {sm:200,md:400}, width: 1, display: 'flex', alignItems: 'center', borderRadius: 200, border: `1px solid ${grey[600]}`, px: .4}}
        >
            <InputBase
                type="search"
                sx={{ ml: 1, flex: 1, pl: 1.2, letterSpacing: 1 }}
                placeholder="Search for a movie, tv show, person......"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(event) => setQuery(event.target.value)}
            />
            <IconButton type="button" sx={{ p: '10px', color: grey[500] }} aria-label="search" onClick={handleSearch}>
                <Search />
            </IconButton>
        </Box>
    )
}
export default SearchInput;