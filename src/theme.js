import {
    createTheme
} from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: "dark",
    },
    breakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400
    },
    typography: {
        fontFamily: "Nunito , sans-serif",
    },
});