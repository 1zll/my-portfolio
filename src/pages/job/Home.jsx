import { AspectRatio, Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import CustomHeading from "../../components/CustomHeading";
import MySwiper from "../../components/MySwiper";
import CustomButton from "../../components/CustomButton";
import CustomFooter from "../../components/CustomFooter";

const Home = () => {

    const jobInfo = {
        name: import.meta.env.VITE_NAME,
        enName: import.meta.env.VITE_EN_NAME,
        school: import.meta.env.VITE_SCHOOL,
        email: import.meta.env.VITE_EMAIL,
        github: import.meta.env.VITE_GITHUB,
        photoPaths: [
            import.meta.env.VITE_MY_FACE,
            import.meta.env.VITE_MY_THUMBNAIL,
        ],
        timelineItem: JSON.parse(import.meta.env.VITE_TIMELINE),
    };

    return (
        <>
        <Image
            src={jobInfo.photoPaths[1]}
            alt="thumbnail"
            w="100%"
            h="100%"
            objectFit="cover"
        />

        {/* Profile (プロフィール) */}
        <Box fontFamily="body">
            <Box textAlign="center" mb={8}>
            <CustomHeading text="Profile" />
            </Box>

            <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: "2rem", md: "6rem" }}
            align={{ base: "center", md: "flex-start" }}
            mx={16}
            >
            <AspectRatio ratio={1} w={{ base: "300px", md: "500px" }} maxW="500px">
                <Image
                src={jobInfo.photoPaths[0]}
                alt="Profile Photo"
                w="100%"
                h="100%"
                objectFit="cover"
                borderRadius="30px"
                />
            </AspectRatio>

            <Box textAlign={{ base: "center", md: "left" }}>
                <Text fontWeight="bold" fontSize={{ base: "lg", md: "2xl" }} mb={6}>
                {jobInfo.name}
                </Text>
                <Text fontWeight="normal" fontSize={{ base: "sm", md: "md" }} mb={6}>
                {jobInfo.school}
                </Text>
                <Text
                whiteSpace="pre-line"
                fontWeight="normal"
                fontSize={{ base: "sm", md: "md" }}
                mb={6}
                >
                {`はじめまして！
                自分で考えたWebデザインをコーディングで形にするのが楽しい専門学生です。

                青系のシンプルでスタイリッシュなデザインや、アニメ・漫画っぽいカラフルでコミカルなデザインが好きで、作品づくりにもよく取り入れています。

                コーディングはまだ勉強中ですが、調べたりAIに助けてもらったりしながら、日々スキルアップ中です。

                ユーザーに「楽しい！」って思ってもらえるサイトを目指して、これからもいろんな表現に挑戦していきます✨

                特技：習字 / ラテアート
                趣味：音楽鑑賞 / 美味しいもの食べること / ラテアートの練習`}
                </Text>

                <Flex justify={{ base: "center", md: "flex-start" }}>
                <RouterLink to="/job/Profile">
                    <CustomButton label="View more" />
                </RouterLink>
                </Flex>
            </Box>
            </Flex>
        </Box>

        {/* Works Sections */}
        {[2023, 2024, 2025].map((year) => (
            <Box textAlign="center" key={year} mt={12}>
            <CustomHeading text={`${year} Works`} />
            <MySwiper year={year} />
            </Box>
        ))}

        {/* Footer */}
        <Box mt={12}>
            <CustomFooter />
        </Box>
        </>
    );
};

export default Home;
