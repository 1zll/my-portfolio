import { Box, Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

//内容
const timelineItems = [
    { year: "2020", month: "3月", label: "横浜市立下瀬谷中学校 卒業" },
    { year: "2020", month: "4月", label: "神奈川県立藤沢総合高等学校 入学" },
    { year: "2020", month: "12月", label: "硬筆書写技能検定試験 2級 合格" },
    { year: "2020", month: "12月", label: "毛筆書写技能検定試験 2級 合格" },
    { year: "2022", month: "1月", label: "全商 情報処理検定試験 2級 合格" },
    { year: "2022", month: "11月", label: "全商 ビジネス計算実務検定試験 2級 合格" },
    { year: "2023", month: "3月", label: "神奈川県立藤沢総合高等学校 卒業" },
    { year: "2023", month: "4月", label: "岩崎学園情報科学専門学校 情報処理科 入学" },
    { year: "2023", month: "9月", label: "普通自動車第一種運転運転免許 取得" },
    { year: "2023", month: "11月", label: "基本情報処理技術者試験 合格" },
    { year: "2024", month: "4月", label: "岩崎学園情報科学専門学校 情報セキュリティ学科 転科" },
    { year: "2027", month: "3月", label: "岩崎学園情報科学専門学校 情報セキュリティ学科 卒業見込み" },
];

const HistoryScroll = () => {
    //高さ調整と横スクロール制御
    const containerRef = useRef(null);
    const scrollRef = useRef(null);

    //画面幅判定
    const isDesktop = useBreakpointValue({ base: false, md: true });

    //スクロール連動処理
    useEffect(() => {
        if (!isDesktop) {
        // モバイルは高さ自動＆横スクロールリセット
        if (containerRef.current) containerRef.current.style.height = "auto";
        if (scrollRef.current) scrollRef.current.scrollLeft = 0;
        return;
        }

    const container = containerRef.current;
    const scrollEl = scrollRef.current;
    if (!container || !scrollEl) return;
    
    // 横スクロール最大幅を計算
    const maxScrollLeft = scrollEl.scrollWidth - scrollEl.clientWidth;

    // 縦スクロール領域を横スクロール幅＋画面高さにセット（縦スクロールを作る）
    container.style.height = `${maxScrollLeft}px`;

    const onScroll = () => {
        const scrollY = window.scrollY;
        const startY = container.offsetTop;
        const endY = container.offsetTop + container.offsetHeight - window.innerHeight;

        if (scrollY >= startY && scrollY <= endY) {
            const progress = (scrollY - startY) / (endY - startY);
            // 縦スクロール進捗に応じて横スクロール量を決定
            scrollEl.scrollLeft = progress * maxScrollLeft;
        }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    }, [isDesktop]);

    return (
        //PCsize
        <Box ref={containerRef} position="relative" px={4} py={8}>
        {isDesktop && (
            <Box
            position="fixed"
            top={0}
            left={0}
            w="auto"
            h="auto"
            zIndex={1}
            bg="transparent"
            />
        )}

        {isDesktop ? (
            <Box
            ref={scrollRef}
            position="sticky"
            top={0}
            display="flex"
            alignItems="center"
            overflowX="auto"
            whiteSpace="nowrap"
            px={10}
            bg="transparent"
            zIndex={10}
            >
            <Box
                minWidth={`${timelineItems.length * 500}px`}
                position="relative"
                h="300px"
            >
                {/* 横軸 */}
                <Box
                position="absolute"
                top="50%"
                left={0}
                right={0}
                h="6px"
                bg="goldenrod"
                borderRadius="full"
                transform="translateY(-50%)"
                />
                <Flex justify="space-between" h="100%" align="center">
                {timelineItems.map((item, idx) => (
                    <Flex
                    key={idx}
                    position="relative"
                    w="auto"
                    direction="column"
                    align="center"
                    justify="center"
                    textAlign="left"
                    pt={idx % 2 === 0 ? 0 : 100}
                    pb={idx % 2 === 0 ? 100 : 0}
                    >
                        {/* 縦軸 */}
                    <Box
                        h="2rem"
                        w="4px"
                        bg="mariner"
                        position="absolute"
                        top="50%"
                        left="50%"
                        borderRadius="full"
                        transform="translate(-50%, -50%)"
                    />
                    <Flex direction="row" align="center" gap={4} position="relative" zIndex={1}>
                        <Box>
                        <Text
                            fontSize={{ base: "3xl", md: "4xl" }}
                            fontWeight="bold"
                            fontFamily="heading"
                            color="mariner"
                            whiteSpace="nowrap"
                        >
                            {item.year}
                        </Text>
                        </Box>
                        <Flex direction="column" gap={1}>
                        <Text fontSize={{ base: "md", md: "xl" }} color="charcoal">
                            {item.month}
                        </Text>
                        <Text fontSize={{ base: "md", md: "xl" }} color="charcoal">
                            {item.label}
                        </Text>
                        </Flex>
                    </Flex>
                    </Flex>
                ))}
                </Flex>
            </Box>
            </Box>
        ) : (
            //Mobile size
            <Box>
            {timelineItems.map((item, idx) => (
                <Box
                key={idx}
                mb={6}
                borderLeft="4px solid goldenrod"
                position="relative"
                pl={6}
                textAlign="start"
                >
                <Text fontWeight="bold" fontFamily="heading" fontSize="xl" mb={1} color="mariner">
                    {item.year} {item.month}
                </Text>
                <Text fontSize="md" color="charcoal">
                    {item.label}
                </Text>
                </Box>
            ))}
            </Box>
        )}
        </Box>
    );
};

export default HistoryScroll;
