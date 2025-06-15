import { AspectRatio, Box, Flex , Image, Link, Text } from "@chakra-ui/react";
import CustomHeading from "../components/CustomHeading";
import CustomProgress from "../components/CustomProgress"
import { IoMailOutline } from "react-icons/io5";
import { FaBootstrap, FaCss3Alt, FaFigma, FaGithub, FaHtml5 , FaJsSquare, FaLinux, FaPhp, FaReact } from "react-icons/fa";
import HistoryScroll from "../components/HistoryScroll";
import CustomFooter from "../components/CustomFooter";
import CustomButton from "../components/CustomButton";
import { Link as RouterLink } from "react-router-dom";

const Profile = () => {
    return(
    <>
        {/* Profile (プロフィール) */}
        <Box fontFamily="body" color="charcoal">
            <Box textAlign="center">
                <CustomHeading text="Profile" />
            </Box>

            <Flex
                direction={{ base: "column", md: "row" }}
                gap={{ base: "2rem", md: "6rem" }}
                align={{ base: "center", md: "flex-start" }}
                mx={16}
                mb={{ base: 4, md: 12 }}
            >
                <AspectRatio
                    ratio={1 / 1}
                    w={{ base: "300px", md: "500px" }}
                    maxW="500px"
                >
                    <Image 
                        src="images/my_face.JPG"
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
                        fontSize={{ base: "xl", md: "2xl" }} 
                        mb={{ base: 2, md: 4 }}
                    >
                        川瀬 真帆
                    </Text>
                    <Text
                        fontWeight="semibold"
                        color="silverchalice"
                        fontSize={{ base: "md", md: "xl" }} 
                        mb={{ base: 6, md: 8 }}
                    >
                        Maho Kawase
                    </Text>
                    <Text
                        fontWeight="normal"
                        fontSize={{ base: "md", md: "xl" }}
                        mb={{ base: 6, md: 8 }}
                    >
                        情報科学専門学校 情報セキュリティ学科
                    </Text>
                    {/* メールアドレス */}
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={8}
                        fontWeight="normal"
                        fontSize={{ base: "md", md: "xl" }}
                        mb={{ base: 6, md: 8 }}
                        
                    >
                        <IoMailOutline size={24} />
                        <Text>cdkm1230091@gn.iwasaki.ac.jp</Text>
                    </Box>
                    {/* Github */}
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={8}
                        fontWeight="normal"
                        fontSize={{ base: "md", md: "xl" }}
                        mb={{ base: 6, md: 8 }}
                        
                    >
                        <FaGithub size={24}/>
                        <Link href="https://github.com/1zll" isExternal>https://github.com/1zll</Link>
                    </Box>
                    {/* 趣味特技 */}
                    <Box
                        textAlign={{ base: "center", md: "left" }}
                        fontWeight="normal"
                        fontSize={{ base: "md", md: "xl" }}
                        mb={{ base: 6, md: 8 }}
                    >
                        <Text fontWeight="bold" mb={{ base: 2, md: 4 }}>趣味</Text>
                        <Text>ラテアートの練習 / 駄菓子を食べること / 音楽鑑賞</Text>
                    </Box>
                    <Box
                        textAlign={{ base: "center", md: "left" }}
                        fontWeight="normal"
                        fontSize={{ base: "md", md: "xl" }}
                    >
                        <Text fontWeight="bold" mb={{ base: 2, md: 4 }}>特技</Text>
                        <Text>習字 / ラテアートでロゼッタを描くこと</Text>
                    </Box>
                </Box>
            </Flex>
            {/* 経歴 */}
            <Box textAlign="center" mb={{ base: 4, md: 6 }}>
                <CustomHeading text="Background" />
                <HistoryScroll />
            </Box>
            {/* Skill */}
            <Box textAlign="center" mb={{ base: 6, md: 8 }}>
                <CustomHeading text="Skill" />
            </Box>
            <Box textAlign="center" display="flex" gap={{ base: 16, md: 32 }} justifyContent="center" flexWrap="wrap" mb={{ base: 14, md: 20 }}>
                <CustomProgress percentage={70} icon={FaHtml5} />
                <CustomProgress percentage={70} icon={FaCss3Alt} />
                <CustomProgress percentage={60} icon={FaJsSquare} />
                <CustomProgress percentage={60} icon={FaBootstrap} />
                <CustomProgress percentage={50} icon={FaPhp} />
                <CustomProgress percentage={55} icon={FaReact} />
                <CustomProgress percentage={50} icon={FaLinux} />
                <CustomProgress percentage={70} icon={FaFigma} />
            </Box>
            {/* PR文章 */}
            <Box textAlign="center" mb={{ base: 6, md: 8 }}>
                <Text
                    fontSize={{ base: "md", md: "xl"}}
                    lineHeight="tall"
                    fontWeight="normal"
                >
                    ReactやBootstrapなどのフレームワークを活用して、<br />
                    効率的かつ見栄えの良いサイトを作ることに楽しさを感じています。<br /><br />
                    思いついたアイデアをまずデザインに起こし、<br />
                    そこからWebサイトとして形にしていくプロセスが好きで、<br />
                    時間を忘れて取り組むこともあります。<br /><br />
                    学校では幅広い技術を学びながら、チーム制作やコンテストにも参加し、<br />
                    ユーザー視点での改善やフィードバックを反映する力も身につけてきました。<br /><br />
                    「ユーザーに“楽しい”を提供したい」という想いを軸に、<br />
                    EdTechやエンタメなど、楽しさや学びにつながる体験づくりに携わっていきたいと考えています。
                </Text>
            </Box>
            <Flex mt={8} justify="center">
                <RouterLink to="/Home" _hover={{ textDecoration: 'none' }}>
                    <CustomButton label="Home" />
                </RouterLink>
            </Flex>
             {/* Footer */}
            <Box mt={8}>
                <CustomFooter />
            </Box>
        </Box>
    </>
    )
}

export default Profile;