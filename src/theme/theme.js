// src/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        white: "#ffffff",     
        mariner: "#4563A5",
        goldenrod: "#F6D367",
        charcoal: "#434656",
        silverchalice: "#9698A9"
    },
    fonts: {
        heading: " Century Gothic ,'Zen Kaku Gothic New', sans-serif",
        body: "'Zen Kaku Gothic New', Century Gothic , sans-serif "
    },
    fontWeights: {
        extrabold: 800,
        bold: 700,
        normal: 500,
        light: 400,
    },
    styles: {
        global: {
            "*": {
                scrollbarWidth: "none", // Firefox
            },
            "*::-webkit-scrollbar": {
                display: "none", // Chrome, Safari
            },
        },
    },
});

export default theme;
