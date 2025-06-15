import { Flex, Text } from "@chakra-ui/react";

const CustomFooter = () => {
    return(
        <Flex
            as="footer"
            backgroundColor="mariner"
            align="center"
            justify="center"
            w="full"
            h="14"
        >
            <Text
                fontSize={{ base: "xs", md: "sm" }}
                color="white"
            >
                © 2025 maho - Designed with care & code.
            </Text>
        </Flex>
    );
}

export default CustomFooter;