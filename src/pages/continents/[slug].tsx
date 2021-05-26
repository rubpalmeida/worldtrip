import { GetStaticPaths, GetStaticProps } from "next";
import { Box, Flex, HStack, Text, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons'

import { Header } from "../../components/Header";

import { getPrismicClient } from "../../services/prismic";
import { ContinentBanner } from "../../components/ContinentBanner";

interface ContinentProps {
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

export default function Continent({ continent }: ContinentProps) {

  return (
    <Flex direction="column" alignItens="center" justifyContent="center">
      <Header isInContinent={true} />
      <ContinentBanner continent={continent} />
      <Flex padding={20}>
        <HStack spacing={40} >
          <Box maxWidth={800} ml={0}>
            <Text fontSize="2xl" fontWeight="400" color="gray.600" textAlign="justify">
              {continent.data.info}
            </Text>
          </Box>
          <HStack spacing={20}>
            <Box textAlign="center">
              <Text fontSize="5xl" fontWeight="600" color="yellow.500">50</Text>
              <Text fontSize="2xl" fontWeight="600" color="gray.600">paises</Text>
            </Box>
            <Box textAlign="center">
              <Text fontSize="5xl" fontWeight="600" color="yellow.500">60</Text>
              <Text fontSize="2xl" fontWeight="600" color="gray.600">linguas</Text>
            </Box>
            <Box textAlign="center">
              <Text fontSize="5xl" fontWeight="600" color="yellow.500">27</Text>
              <Flex align="center" justifyContent="center">
                <Text mr={4} fontSize="2xl" fontWeight="600" color="gray.600">
                  cidades +100
                </Text>
                <Tooltip bg="gray.50" color="gray.200" label="+100 são as melhores cidades" aria-label="A tooltip">
                  <InfoOutlineIcon color="gray.200" />
                </Tooltip>
              </Flex>
            </Box>
          </HStack>
        </HStack>
      </Flex>
      <Flex>
        <Box>

        </Box>
      </Flex>
    </Flex >
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async context => {

  const { slug } = context.params

  const prismic = getPrismicClient();

  const response = await prismic.getByUID('continents', String(slug), {})

  return {
    props: {
      continent: response
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
