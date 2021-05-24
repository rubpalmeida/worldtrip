import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      h="368.21px"
      bgImage="url('/images/background.svg')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      align="center"
    >
      <Box pl={140}>
        <Text
          maxWidth={426}
          fontWeight="500"
          fontSize="4xl"
          lineHeight="54px"
          mr="auto"
        >
          5 Continentes, inifinitas possibilidades
        </Text>
        <Text
          maxWidth={524}
          fontSize="xl"
          color="gray.200"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>

      <Box ml="auto" mr={76}>
        <Image
          w={417}
          h={270}
          src="/images/airplane.svg"
          alt="airplane"
          transform="rotate(3deg)"
        />
      </Box>
    </Flex>
  );
}
