import { Button, Flex, Image, Link } from "@chakra-ui/react";

export function Header({ isInContinent }) {

  return (
    <Flex as="header" w="100vw" align="center" justify="center" p="7" position="relative">
      {isInContinent && (
        <Link href="/">
          <Image pos="absolute" left={20} top={10} src="/backward.png" cursor="pointer" />
        </Link>
      )}
      <Image src="/logo.svg" />
    </Flex>
  );
}
