// components/SkillSection.jsx
//使用したことがある技術一覧
import { Box, SimpleGrid, Flex } from "@chakra-ui/react";
import CustomProgress from "./CustomProgress";
import { skills } from "../data/jobInfo";

const SkillSection = () => {
    return (
        <Box px={8} my={12}>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={16}>
            {skills.map((skill, index) => (
            <Flex
                key={index}
                direction="column"
                align="center"
                justify="center"
            >
                <CustomProgress
                percentage={skill.value}
                icon={skill.icon}
                size={{ base: "80px", md: "120px", lg: "150px" }}
                />
            </Flex>
            ))}
        </SimpleGrid>
        </Box>
    );
};

export default SkillSection;
