import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';

const CustomButton = ({ label }) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(true);
        setTimeout(() => setActive(false), 700);
    };

    return (
        <Box
            as="button"
            onClick={handleClick}
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="3px solid"
            borderColor="goldenrod"
            borderRadius="20px"
            px={{ base: 10, md: 14 }}
            py={3}
            bg="transparent"
            cursor="pointer"
            w="fit-content"
            _focus={{ outline: 'none !important', boxShadow: 'none !important' }}
            _active={{ outline: 'none !important', boxShadow: 'none !important' }}
        >
            <Text fontFamily="heading" color="charcoal" fontWeight="bold" fontSize={{ base: '16px', md: '20px' }} style={{ whiteSpace: "nowrap" }}>
                {label}
            </Text>
            <Box
                position="absolute"
                right="-25px"
                top="50%"
                transform={`translateY(-50%) translateX(${active ? '30px' : '0'})`}
                transition="transform 0.7s ease"
                width="50px"
                height="3px"
                borderRadius="50px"
                bg="goldenrod"
                zIndex={1}
            />
        </Box>
    );
};

export default CustomButton;
