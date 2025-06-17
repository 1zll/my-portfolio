import { Box, Flex , Text } from "@chakra-ui/react";
import CustomHeading from "../../components/CustomHeading";
import HistoryScroll from "../../components/HistoryScroll";
import CustomFooter from "../../components/CustomFooter";
import CustomButton from "../../components/CustomButton";
import { Link as RouterLink } from "react-router-dom";
import ProfileInfo from "../../components/ProfileInfo";
import SkillSection from "../../components/SkillSection";

const Profile = () => {
    return(
    <>
        {/* Profile (プロフィール) */}
        <Box fontFamily="body" color="charcoal">
            <Box textAlign="center">
                <CustomHeading text="Profile" />
            </Box>
            <ProfileInfo />
            {/* 経歴 */}
            <Box textAlign="center" mb={{ base: 4, md: 6 }}>
                <CustomHeading text="Background" />
                <HistoryScroll />
            </Box>
            {/* Skill */}
            <Box textAlign="center" mb={{ base: 6, md: 8 }}>
                <CustomHeading text="Skill" />
            </Box>
            <SkillSection />
            {/* PR文章 */}
            <Box textAlign="center" mb={{ base: 6, md: 8 }}>
                <Text
                    fontSize={{ base: "md", md: "xl"}}
                    lineHeight="tall"
                    fontWeight="normal"
                    mx={8}
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
                <RouterLink to="/public/Home" _hover={{ textDecoration: 'none' }}>
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