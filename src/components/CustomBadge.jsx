import { Badge } from "@chakra-ui/react";

const CustomBadge = ({ text }) => {
    return (
        <Badge
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            color="charcoal"
            variant="outline"
            borderWidth="2px"
            borderColor="mariner"
            fontFamily="heading"
            borderRadius="full"
            px={{ base: 8, md: 10, lg: 12 }}
            py={{ base: 1, md: 2, lg: 2 }}
            textTransform="none"
        >
        {text}
        </Badge>
    );
};

export default CustomBadge;
