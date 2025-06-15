// src/components/Layout.jsx
import { Box } from "@chakra-ui/react";
import bgImage from "../assets/gridpaper_3_lavender.jpg";

export default function Layout({ children }) {
    return (
        <Box
        minH="100vh"
        bgImage={`url(${bgImage})`}
        bgRepeat="repeat"
        bgSize="auto"
        m={0}
        p={0}
        bgAttachment="fixed"
        >
        {children}
        </Box>
    );
}

