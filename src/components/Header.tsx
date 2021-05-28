import { Button, Flex, Grid, Icon, Image, Link } from "@chakra-ui/react";

import { RiArrowLeftSLine } from 'react-icons/ri'

export function Header({ isInContinent }) {

  return (
    <Flex
      as="header"
      w="100%"
      h={["50px", "100px"]}
      align="center"
      justify="center"
      px="1rem"
      position="relative"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        justifyContent="center"
        templateColumns="repeat(3, 1fr)"
      >
        {isInContinent && (
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start" color="gray.600" />
            </a>
          </Link>
        )}
        <Image
          w={["81px", "184px"]}
          src="/logo.svg"
          alt="logo WorldTrip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
