// components/ProfileInfo.jsx
//画像・名前・学校・連絡先・趣味・特技
import { useLocation } from "react-router-dom";
import { AspectRatio, Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { IoMailOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

import { publicInfo } from "../data/publicInfo";
import { jobInfo } from "../data/jobInfo";

const ProfileInfo = () => {
    const location = useLocation();
    const isJob = location.pathname.startsWith("/job");

    // パスに応じて読み込むデータを切り替え
    const info = isJob ? jobInfo : publicInfo

    return (
        <Flex direction={{ base: "column", md: "row" }} gap={{ base: "2rem", md: "6rem" }} align={{ base: "center", md: "flex-start" }} mx={16} mb={{ base: 4, md: 12 }}>
            <AspectRatio ratio={1 / 1} w={{ base: "300px", md: "500px" }} maxW="500px">
                <Image src={info.photoPaths[0]} alt="Profile Photo" w="100%" h="100%" objectFit="cover" borderRadius="30px" />
            </AspectRatio>

            <Box textAlign={{ base: "center", md: "left" }}>
                <Text fontWeight="bold" fontSize={{ base: "xl", md: "2xl" }} mb={{ base: 2, md: 4 }}>
                {info.name}
                </Text>
                <Text fontWeight="semibold" color="silverchalice" fontSize={{ base: "md", md: "xl" }} mb={{ base: 6, md: 8 }}>
                {info.en_name}
                </Text>
                <Text fontWeight="normal" fontSize={{ base: "md", md: "xl" }} mb={{ base: 6, md: 8 }}>
                {info.school}
                </Text>

                <Box display="flex" alignItems="center" gap={8} fontWeight="normal" fontSize={{ base: "md", md: "xl" }} mb={{ base: 6, md: 8 }}>
                <IoMailOutline size={24} />
                <Text>{info.email}</Text>
                </Box>
                <Box display="flex" alignItems="center" gap={8} fontWeight="normal" fontSize={{ base: "md", md: "xl" }} mb={{ base: 6, md: 8 }}>
                <FaGithub size={24} />
                <Link href={info.github} isExternal>{info.github}</Link>
                </Box>

                <Box textAlign={{ base: "center", md: "left" }} fontWeight="normal" fontSize={{ base: "md", md: "xl" }} mb={{ base: 6, md: 8 }}>
                <Text fontWeight="bold" mb={{ base: 2, md: 4 }}>趣味</Text>
                <Text>ラテアートの練習 / 駄菓子を食べること / 音楽鑑賞</Text>
                </Box>
                <Box textAlign={{ base: "center", md: "left" }} fontWeight="normal" fontSize={{ base: "md", md: "xl" }}>
                <Text fontWeight="bold" mb={{ base: 2, md: 4 }}>特技</Text>
                <Text>習字 / ラテアートでロゼッタを描くこと</Text>
                </Box>
            </Box>
        </Flex>
    );
};

export default ProfileInfo;
