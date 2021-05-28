import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { City } from "./City";

export function Cities() {
  return (
    <>
      <Heading
        fontWeight="500"
        color="gray.600"
        fontSize={["2xl", "4xl"]}
        mb="10"
      >
        Cidades +100
    </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <City country="Reino Unido" flag="/images/countries/unitedkingdom.png" city="Londres" cityImg="/images/cities/london.png" />
        <City country="França" flag="/images/countries/france.png" city="Paris" cityImg="/images/cities/paris.png" />
        <City country="Itália" flag="/images/countries/italy.png" city="Roma" cityImg="/images/cities/rome.png" />
        <City country="República Tcheca" flag="/images/countries/tchecrepublic.png" city="Praga" cityImg="/images/cities/praga.png" />
        <City country="Holanda" flag="/images/countries/netherlands.png" city="Amsterdã" cityImg="/images/cities/amsterda.png" />
      </Grid>
    </>
  );
}
