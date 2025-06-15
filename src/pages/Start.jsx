import { Box, Flex, Text } from "@chakra-ui/react";
import FileIcon from "../icons/FileIcon";
import { FaRegSquare, FaRegWindowMinimize, FaTimes } from "react-icons/fa";

const Start = () => {

    return (
        <Box
        w="100vw"
        h="100vh"
        p={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
        <Box
            w={["95%", "80%", "600px", "800px"]}
            maxW="100%"
            h={["400px", "500px", "600px"]}
            bg="white"
            border="8px solid goldenrod"
            borderRadius="20px"
            overflow="hidden"
            boxShadow="lg"
            display="flex"
            flexDirection="column"
        >
            {/* ヘッダー */}
            <Flex
            w="100%"
            h={["40px", "50px"]}
            bg="goldenrod"
            alignItems="center"
            px={4}
            color="white"
            fontWeight="bold"
            borderBottom="4px solid goldenrod"
            flexShrink={0}
            >
            <Text fontSize="md">My Desktop App</Text>

            <Flex ml="auto" alignItems="center" gap={3}>
                <FaRegWindowMinimize cursor="pointer" />
                <FaRegSquare cursor="pointer" />
                <FaTimes cursor="pointer" />
            </Flex>
            </Flex>

            {/* コンテンツ */}
            <Flex flexGrow={1} justifyContent="center" alignItems="center" p={6}>
            <FileIcon />
            </Flex>
        </Box>
        </Box>
    );
};

export default Start;
