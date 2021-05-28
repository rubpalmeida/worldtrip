import { Flex, Heading, Link, Text, useBreakpointValue } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { A11y, Navigation, Pagination } from 'swiper'

SwiperCore.use([Navigation, Pagination, A11y])

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
  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      h={["250px", "450px"]}
      mb={["5", "10"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: "100%", flex: "1" }}
      >
        {continents.map(continent => {
          return (
            <SwiperSlide key={continent.slug}>
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                bgImage={`url(${continent.banner})`}
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
                textAlign="center"
              >
                <Link href={`/continents/${continent.slug}`} _hover={{ textDecoration: "none" }}>
                  <a>
                    <Heading fontWeight="bold" fontSize={["3xl", "4xl", "5xl"]} color="gray.50">{continent.title}</Heading>
                    <Text fontWeight="bold" fontSize={["0.8rem", "1xl", "2xl"]} color="gray.200" mt={["2", "4"]} >{continent.subtitle}</Text>
                  </a>
                </Link>
              </Flex>
            </SwiperSlide>
          );
        })}

      </Swiper>
    </Flex>
  )
}
