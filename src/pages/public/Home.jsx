import { AspectRatio, Box , Flex, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import CustomHeading from "../../components/CustomHeading";
import MySwiper from "../../components/MySwiper";
import CustomButton from "../../components/CustomButton";
import CustomFooter from "../../components/CustomFooter";
import publicInfo from "../../data/publicInfo";

const Home = () => {
    return (
        <>
            <Image
                src={publicInfo.photoPaths[1]}
                alt="thumbnail"
                w="100%" 
                h="100%" 
                objectFit="cover"
            />

            {/* Profile (プロフィール) */}
            <Box fontFamily="body">
                <Box textAlign="center">
                    <CustomHeading text="Profile" />
                </Box>

                <Flex
                    direction={{ base: "column", md: "row" }}
                    gap={{ base: "2rem", md: "6rem" }}
                    align={{ base: "center", md: "flex-start" }}
                    mx={16}
                >
                    <AspectRatio
                        ratio={1 / 1}
                        w={{ base: "300px", md: "500px" }}
                        maxW="500px"
                    >
                        <Image 
                            src={publicInfo.photoPaths[0]}
                            alt="Profile Photo"
                            w="100%" 
                            h="100%" 
                            objectFit="cover"
                            borderRadius="30px"
                        />
                    </AspectRatio>

                    <Box textAlign={{ base: "center", md: "left" }}>
                        <Text
                            fontWeight="bold"
                            fontSize={{ base: "lg", md: "2xl" }} 
                            mb={{ base: 6, md: 8 }}
                        >
                            {publicInfo.name}
                        </Text>
                        <Text
                            fontWeight="normal"
                            fontSize={{ base: "sm", md: "md" }}
                            mb={{ base: 6, md: 8 }}
                        >
                            {publicInfo.school}
                        </Text>
                        <Text
                            whiteSpace="pre-line"
                            fontWeight="normal"
                            fontSize={{ base: "sm", md: "md" }}
                            mb={{ base: 6, md: 8 }}
                        >
                            {`はじめまして！
                            自分で考えたWebデザインをコーディングで形にするのが楽しい専門学生です。

                            青系のシンプルでスタイリッシュなデザインや、アニメ・漫画っぽいカラフルでコミカルなデザインが好きで、作品づくりにもよく取り入れています。

                            コーディングはまだ勉強中ですが、調べたりAIに助けてもらったりしながら、日々スキルアップ中です。

                            ユーザーに「楽しい！」って思ってもらえるサイトを目指して、これからもいろんな表現に挑戦していきます✨

                            特技：習字 / ラテアート
                            趣味：音楽鑑賞 / 美味しいもの食べること / ラテアートの練習`}
                        </Text>
                        <Flex justify={{ base: "center", md: "flex-start" }} mb={{ base: 6, md: 8 }}>
                            <RouterLink to="/public/Profile">
                                <CustomButton label="View more" />
                            </RouterLink>
                        </Flex>
                    </Box>
                </Flex>
            </Box>

            {/* 2023〜2025 Works */}
            <Box textAlign="center">
                <CustomHeading text="2023 Works" />
                <MySwiper year={2023} />
            </Box>

            <Box textAlign="center">
                <CustomHeading text="2024 Works" />
                <MySwiper year={2024} />
            </Box>

            <Box textAlign="center">
                <CustomHeading text="2025 Works" />
                <MySwiper year={2025} />
            </Box>

            {/* Footer */}
            <Box mt={8}>
                <CustomFooter />
            </Box>
        </>
    );
};

export default Home;
