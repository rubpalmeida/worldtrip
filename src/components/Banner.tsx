import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url('/images/background.svg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <Box>
          <Heading
            color="gray.50"
            fontWeight="500"
            fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}
            lineHeight="54px"
          >
            5 Continentes, <br /> inifinitas possibilidades
        </Heading>
          <Text
            maxW={["100%", "100%", "100%", "550px"]}
            fontSize={["0.8rem", "xl"]}
            mt="5"
            color="gray.200"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
        </Box>

        <Image
          w={["300px", "300px", "300px", "430px"]}
          display={["none", "none", "block"]}
          src="/images/airplane.svg"
          alt="Avião Amarelo"
          transform="rotate(3deg) translateY(48px)"
          ml={8}
        />
      </Flex>
    </Flex>
  );
}
