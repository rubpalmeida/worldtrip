import { Box, Flex, Grid, GridItem, HStack, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { Type } from "./Type";

export function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={["1", "5"]}
    >
      <GridItem>
        <Type icon="/cocktail.svg" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Type icon="/surf.svg" text="praia" />
      </GridItem>
      <GridItem>
        <Type icon="/building.svg" text="moderno" />
      </GridItem>
      <GridItem>
        <Type icon="/museum.svg" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]} >
        <Type icon="/earth.svg" text="e mais..." />
      </GridItem>
    </Grid>

  );
}
