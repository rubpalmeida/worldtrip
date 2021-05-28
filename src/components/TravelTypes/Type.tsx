import { Box, Flex, Grid, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TypesProps {
  icon: string;
  text: string;
}

export function Type({ icon, text }: TypesProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  })

  return (
    <Flex
      direction={["row", "column"]}
      alignItems="center"
      justifyContent="center"
    >
      {isMobile
        ? <Image src={icon} />
        : <Text color="yellow.500" fontSize="4xl" mr="2" >.</Text>}
      <Text fontSize={["md", "xl", "2xl"]} mt="6" fontWeight="600" color="gray.600">{text}</Text>
    </Flex>
  );
}
