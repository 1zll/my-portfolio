import { useState, useRef } from 'react';
import { Box, IconButton, HStack, Circle } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import 'swiper/css';
import 'swiper/css/free-mode';

import ProjectCard from './ProjectCard';
import projects from '../data/projects';

const MySwiper = ({ year }) => { // yearをプロパティとして受け取る
  const [current, setCurrent] = useState(0);
  const swiperRef = useRef(null);

  // yearフィルターを適用したデータを抽出
  const filteredProjects = projects.filter(project => project.year === year);

  return (
    <Box
      w="100%"
      maxW="1000px"
      mx="auto"
      px={8}
      position="relative" 
    >
      {/* Swiper本体 */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
        slidesPerView={3}
        spaceBetween={24}
        freeMode
        modules={[FreeMode]}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {filteredProjects.map((proj, i) => (
          <SwiperSlide key={i}>
            <ProjectCard {...proj} id={i} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ボタンやページネーションはそのまま */}
      <IconButton
        aria-label="Previous slide"
        icon={<ChevronLeftIcon boxSize={6} color="charcoal" />}
        onClick={() => swiperRef.current?.slidePrev()}
        isDisabled={current === 0}
        position="absolute"
        top="50%"
        left="0"
        transform="translateY(-50%)"
        bg="white"
        borderRadius="full"
        borderWidth="2px"
        borderColor="mariner"
        boxShadow="md"
        zIndex="2"
      />

      <IconButton
        aria-label="Next slide"
        icon={<ChevronRightIcon boxSize={6} color="charcoal" />}
        onClick={() => swiperRef.current?.slideNext()}
        isDisabled={current === filteredProjects.length - 1}
        position="absolute"
        top="50%"
        right="0"
        transform="translateY(-50%)"
        bg="white"
        borderRadius="full"
        borderWidth="2px"
        borderColor="mariner"
        boxShadow="md"
        zIndex="2"
      />

      <HStack spacing={2} justify="center" mt={6}>
        {filteredProjects.map((_, idx) => (
          <Circle
            key={idx}
            size="10px"
            bg={current === idx ? 'mariner' : 'gray.300'}
            cursor="pointer"
            onClick={() => swiperRef.current?.slideTo(idx)}
            transition="transform .2s"
            _hover={{ transform: 'scale(1.3)' }}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default MySwiper;
