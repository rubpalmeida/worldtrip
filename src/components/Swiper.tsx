import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation, Pagination } from 'swiper'

import 'swiper/swiper-bundle.css'
// import '../styles/Swiper.module.css'

SwiperCore.use([Navigation, Pagination])

export function Slider() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const isMobileVersion = useBreakpointValue({
    base: false,
    sm: true
  })

  const slides = [
    {
      id: 1,
      src: '/images/europe.png',
      header: 'Europa',
      text: 'O Continente mais antigo'
    },
    {
      id: 2,
      src: '/images/europe.png',
      header: 'Europa',
      text: 'O Continente mais antigo'
    },
    {
      id: 3,
      src: '/images/europe.png',
      header: 'Europa',
      text: 'O Continente mais antigo'
    },
    {
      id: 4,
      src: '/images/europe.png',
      header: 'Europa',
      text: 'O Continente mais antigo'
    },
    {
      id: 5,
      src: '/images/europe.png',
      header: 'Europa',
      text: 'O Continente mais antigo'
    },
  ]

  return (
    <Flex
      w="90%"
      align="center"
      justify="center"
      mb="8"
    >
      <Swiper
        wrapperTag="ul"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination
        loop
        initialSlide={0}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Flex
              backgroundImage={`url(${slide.src})`}
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              backgroundSize="cover"
              cursor="pointer"
              w="100%"
              h={450}
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                direction="column"
                w="100%"
              >
                <Text fontWeight="600" fontSize={["24px", "48px"]}>{slide.header}</Text>
                <Text fontWeight="500" fontSize={["14px", "24px"]}>{slide.text}</Text>
              </Flex>
            </Flex>
          </SwiperSlide>
        ))}

      </Swiper>
    </Flex>
  )
}
