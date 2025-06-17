import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Link,
    Flex
} from '@chakra-ui/react';
import CustomButton from './CustomButton';
import { useLocation, Link as ReactRouterLink } from 'react-router-dom'

const ProjectCard = ({ title, image, alt , description, slug }) => {

    const location = useLocation();
    const basePath = location.pathname.startsWith("/job") ? "/job" : "/public";

    return (
        <Card
            maxW='sm'
            minH="450px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            borderColor="silverchalice"
            borderWidth="2px"
            borderRadius="2xl"
        >
            <CardBody>
                <Image
                    src={image}
                    alt={alt}
                    borderRadius='lg'
                    objectFit="cover"
                    w="100%"
                    h="200px"
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' fontFamily="body">{title}</Heading>
                    <Text>{description}</Text>
                    <Flex mt={8} justify="center">
                        <Link
                            as={ReactRouterLink}
                            to={`${basePath}/projects/${slug}`}
                            _hover={{ textDecoration: 'none' }}
                        >
                            <CustomButton label="View more" />
                        </Link>
                    </Flex>
                </Stack>
            </CardBody>
        </Card>
    );
};

export default ProjectCard;
