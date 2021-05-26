import { Box, Flex, Image, Link, Text, useBreakpointValue } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation, Pagination } from 'swiper'

import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])

interface Continents {
  slug: string;
  title: string;
  subtitle: string;
  banner: string;
}

interface ContinentsProps {
  continents: Continents[]
}

export function Slider({ continents }: ContinentsProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const isMobileVersion = useBreakpointValue({
    base: false,
    sm: true
  })

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
        {continents.map(continent => {
          return (
            <SwiperSlide key={continent.slug}>
              <Link href={`/continents/${continent.slug}`} _hover={{ textDecoration: "none" }}>
                <Flex
                  backgroundImage={`url(${continent.banner})`}
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
                    <Text fontWeight="600" fontSize={["24px", "48px"]}>{continent.title}</Text>
                    <Text fontWeight="500" fontSize={["14px", "24px"]}>{continent.subtitle}</Text>
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
