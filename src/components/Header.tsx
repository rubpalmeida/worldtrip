import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" w="100vw" align="center" justify="center" p="7">
      <Image src="/logo.svg" />
    </Flex>
  );
}
