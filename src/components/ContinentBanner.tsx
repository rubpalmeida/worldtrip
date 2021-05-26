import { Button, Flex, Image, Text } from "@chakra-ui/react";

interface ContinentBannerProps {
  continent: {
    data: {
      title: string;
      info: string;
      continent_image: {
        url: string;
      }
    }
  }
}

export function ContinentBanner({ continent }: ContinentBannerProps) {

  return (
    <Flex position="relative">
      <Image
        w="100%"
        h={500}
        src={continent.data.continent_image.url}
        objectFit="cover"
      />
      <Flex position="absolute" bottom="0" ml={20} mb={10}>
        <Text fontWeight="bold" fontSize="5xl">{continent.data.title}</Text>
      </Flex>
    </Flex >
  );
}
