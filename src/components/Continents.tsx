import { Box, Flex, Text } from "@chakra-ui/react";
import { Slider } from "./Swiper";

export function Continents() {
  return (
    <Flex direction="column" align="center" justify="center" p="10">
      <Box textAlign="center" pl="48" pb="14">
        <Text fontWeight="500" fontSize="4xl" color="gray.600">Vamos nessa?</Text>
        <Text fontWeight="500" fontSize="4xl" color="gray.600">Então escolha seu continente</Text>
      </Box>
      <Slider />
    </Flex>
  );
}
