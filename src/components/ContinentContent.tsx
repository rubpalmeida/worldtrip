import { Flex, Grid, Text, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

interface ContinentProps {
  continent: {
    data: {
      info: string;
    }
  }
}

export function ContinentContent({ continent }: ContinentProps) {
  return (

    <Grid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        fontWeight="400"
        color="gray.600"
        textAlign="justify"
      >
        {continent.data.info}
      </Text>


      <Flex align="center" justify="space-between">
        <Flex alignItems={["flex-start", "flex-start", "center"]} justifyContent="center" direction="column">
          <Text fontSize={["2xl", "5xl"]} fontWeight="600" color="yellow.500">50</Text>
          <Text fontSize={["md", "xl"]} fontWeight="400" color="gray.600">países</Text>
        </Flex>

        <Flex alignItems={["flex-start", "flex-start", "center"]} justifyContent="center" direction="column">
          <Text fontSize={["2xl", "5xl"]} fontWeight="600" color="yellow.500">60</Text>
          <Text fontSize={["md", "xl"]} fontWeight="400" color="gray.600">linguas</Text>
        </Flex>

        <Flex alignItems={["flex-start", "flex-start", "center"]} justifyContent="center" direction="column">
          <Text fontSize={["2xl", "5xl"]} fontWeight="600" color="yellow.500">27</Text>
          <Flex alignItems="center" justifyContent="center" direction="row">
            <Text mr={4} fontSize={["md", "xl"]} fontWeight="400" color="gray.600">
              cidades +100
            </Text>
            <Tooltip bg="gray.50" color="gray.300" label="+100 são as melhores cidades" aria-label="A tooltip">
              <InfoOutlineIcon color="gray.300" w={["10px", "16px"]} h={["10px", "16px"]} />
            </Tooltip>
          </Flex>
        </Flex>
      </Flex>

    </Grid>
  );
}
