import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import CustomBadge from "../components/CustomBadge";
import CustomFooter from "../components/CustomFooter";
import { Link as RouterLink } from "react-router-dom";
import projects from "../data/projects";
import CustomButton from "../components/CustomButton";
import Rectangle from "../assets/images/Rectangle.svg";
import publicInfo from "../data/publicInfo";
import jobInfo from "../data/jobInfo.js";

const Project = () => {
  const location = useLocation();
  const { slug } = useParams(); 
  console.log(location.pathname);

  const isJob = location.pathname.startsWith("/job");
  const isPublic = !isJob; // ← これでOK

  const info = isJob ? jobInfo : publicInfo;
  const backTo = isJob ? "/job/home" : "/home";
  
  const project = projects.find((p) => p.slug === slug);

  // .envから環境変数を取得
  const NOT_FOUND_MESSAGE = import.meta.env.REACT_APP_PROJECT_NOT_FOUND_MESSAGE || "プロジェクトが見つかりません。";

  if (!project) {
    return (
      <Box py={20}>
        <Center>
          <Text fontSize="xl" color="red.500">
            {NOT_FOUND_MESSAGE}
          </Text>
        </Center>
      </Box>
    );
  }

  return (
    <>
      {/* ===== 画像部分 ===== */}
      <Box
        position="relative"
        w="100%"
        h={["200px", "300px", "500px"]}
        pt={[4, 12, 16]}
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        overflow="visible"
      >
        {/* 背景SVG（黄色） */}
        <Box
          as="img"
          src={Rectangle}
          alt="背景装飾"
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          objectFit="cover"
          borderBottomRadius="30%"
          zIndex="0"
        />

        {/* プロジェクト画像 */}
        <Box
          as="img"
          src={project.image}
          alt={`${project.title}の画像`}
          position="relative"
          zIndex="1"
          maxW={["90%", "80%", "70%"]}
          maxH="100%"
          objectFit="contain"
          mt={[4, 12, 16]}
        />
      </Box>

      {/* ===== コンテンツ部分 ===== */}
      <Box p={{ base: 8, md: 12, lg: 16 }} mt={[4, 8, 16]}>
        <Heading
          fontFamily="body"
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          textAlign="center"
          mb={{ base: 6, md: 8 }}
        >
          {project.title}
        </Heading>

        <Flex
          gap={16}
          mb={{ base: 6, md: 8 }}
          flexWrap="wrap"
          justifyContent={{ base: "flex-start", lg: "center" }}
          alignItems={{ base: "flex-start", lg: "center" }}
        >
          {/* Role & Tools */}
          <Flex
            direction={{ base: "row", lg: "column" }}
            gap={8}
            flex="1"
            maxW={{ lg: "fit-content" }}
          >
            <Box>
              <Heading size="md" mb={{ base: 4, md: 6 }}>
                Role
              </Heading>
              <Flex gap={4} flexWrap="wrap">
                {project.role.map((r, i) => (
                  <CustomBadge key={i} text={r} />
                ))}
              </Flex>
            </Box>

            <Box>
              <Heading size="md" mb={{ base: 4, md: 6 }}>
                Tools
              </Heading>
              <Flex gap={4} flexWrap="wrap">
                {project.tools.map((tool, i) => (
                  <CustomBadge key={i} text={tool} />
                ))}
              </Flex>
            </Box>
          </Flex>

          {/* 詳細説明 */}
          {project.details && (
            <Box flex="2" minW="250px" maxW={{ lg: "600px" }} textAlign="left">
              <Text fontFamily="body">{project.details}</Text>
            </Box>
          )}
        </Flex>
        {/* View more */}
        <Box display="flex" justifyContent="center" alignItems="center" py={{ base: 4,md:  8}}>
          <RouterLink to={project.url} _hover={{ textDecoration: 'none' }}>
            <CustomButton label="View more" />
          </RouterLink>
        </Box>
      </Box>

      {/* StyleGuideがあるときのみ表示 */}
      {project.styleguide && (
      <Box
        as="img"
        src={project.styleguide}
        alt={`${project.title}のStyle Guide`}
        position="relative"
        zIndex="1"
        objectFit="contain"
        maxW={["90%", "80%", "1000px"]}
        w="100%"
        mx="auto"
        mb={12}
      />
    )}

      {/* Homeに戻る */}
      <Box display="flex" justifyContent="center" alignItems="center" my={6}>
        <RouterLink to={backTo} _hover={{ textDecoration: 'none' }}>
          <CustomButton label="Back to home" />
        </RouterLink>
      </Box>


      {/* Footer */}
      <Box mt={16}>
        <CustomFooter />
      </Box>
    </>
  );
};

export default Project;
