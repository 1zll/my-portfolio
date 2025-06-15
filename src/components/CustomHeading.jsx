import { Heading } from "@chakra-ui/react";

const CustomHeading = ({ text }) => {
    return (
        <Heading
            as="h4"
            size="lg"
            color="charcoal"
            textAlign="center"
            borderBottom="2px"
            borderColor="mariner"
            borderStyle="dashed"
            display="inline-block"
            px={8}
            pb={2}
            my={14}
        >
        {text}
        </Heading>
    );
};

export default CustomHeading;
