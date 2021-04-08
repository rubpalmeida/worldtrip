import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <Flex w="100%" align="center" justify="center" py="20">
      <HStack spacing="20">
        <Box align="center">
          <Image src="/cocktail.svg" />
          <Text mt="6" fontWeight="600" color="gray.600">vida noturna</Text>
        </Box>
        <Box align="center">
          <Image src="/surf.svg" />
          <Text mt="6" fontWeight="600" color="gray.600">praia</Text>
        </Box>
        <Box align="center">
          <Image src="/building.svg" />
          <Text mt="6" fontWeight="600" color="gray.600">moderno</Text>
        </Box>
        <Box align="center">
          <Image src="/museum.svg" />
          <Text mt="6" fontWeight="600" color="gray.600">classico</Text>
        </Box>
        <Box align="center">
          <Image src="/earth.svg" />
          <Text mt="6" fontWeight="600" color="gray.600">e mais...</Text>
        </Box>
      </HStack>
    </Flex>
  );
}
