import { Box, Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { timelineItems } from "../data/history"; 

//内容


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
