import { Box, Flex, Image, Link, Text, useBreakpointValue } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation, Pagination } from 'swiper'

import 'swiper/swiper-bundle.css'

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
      src: '/images/continents/europe/europe.png',
      header: 'América do Norte',
      text: 'O Continente mais antigo1'
    },
    {
      id: 2,
      src: '/images/continents/europe/europe.png',
      header: 'América do Sul',
      text: 'O Continente mais antigo2'
    },
    {
      id: 3,
      src: '/images/continents/europe/europe.png',
      header: 'Ásia',
      text: 'O Continente mais antigo3'
    },
    {
      id: 4,
      src: '/images/continents/europe/europe.png',
      header: 'Africa',
      text: 'O Continente mais antigo4'
    },
    {
      id: 5,
      src: '/images/continents/europe/europe.png',
      header: 'Europa',
      text: 'O Continente mais antigo5'
    },
    {
      id: 6,
      src: '/images/continents/europe/europe.png',
      header: 'Oceania',
      text: 'O Continente mais antigo6'
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
        pagination={{ clickable: true }}
        loop
        initialSlide={0}
      >
        {slides.map(slide => {
          return (
            <SwiperSlide key={slide.id}>
              <Link href={`/continents/${slide.header}`}>
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
              </Link>
            </SwiperSlide>
          );
        })}

      </Swiper>
    </Flex>
  )
}
