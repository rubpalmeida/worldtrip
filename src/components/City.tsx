import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CityProps {
  country: string;
  flag: string;
  city: string;
  cityImg: string;
}

export function City({ city, flag, country, cityImg, }: CityProps) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={`${cityImg}`} h="170px" w="100%" objectFit="cover" />
      <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.500" borderTop="0">
        <Flex direction="column">
          <Heading
            fontSize="xl"
            fontFamily="Barlow"
            fontWeight="600"
            color="gray.600"
          >
            {city}
          </Heading>
          <Text
            fontSize="md"
            fontFamily="Barlow"
            fontWeight="600"
            color="gray.300"
            mt="3"
          >
            {country}
          </Text>
        </Flex>
        <Image src={`${flag}`} w="30px" h="30px" borderRadius="50%" />
      </Flex>
    </Box >
  );
}
