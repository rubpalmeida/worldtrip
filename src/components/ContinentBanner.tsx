import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface ContinentBannerProps {
  continent: {
    data: {
      title: string;
      continent_image: {
        url: string;
      }
    }
  }
}

export function ContinentBanner({ continent }: ContinentBannerProps) {

  return (
    <Flex
      w="100%"
      h={["150px", "300px", "500px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage={`url(${continent.data.continent_image.url})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      align="center"
      justify={["center", "center", "flex-start"]}
    >
      <Heading
        textAlign={["center", "left"]}
        fontWeight="500"
        fontSize={["1.75rem", "5xl"]}
        color="gray.50"
      >
        {continent.data.title}
      </Heading>
    </Flex >
  );
}
