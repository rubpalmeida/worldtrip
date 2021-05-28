import { GetStaticPaths, GetStaticProps } from "next";
import { Box, Flex, Grid, HStack, Text, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons'

import { Header } from "../../components/Header";

import { getPrismicClient } from "../../services/prismic";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Cities } from "../../components/Cities";
import { ContinentContent } from "../../components/ContinentContent";

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
    <Flex direction="column">
      <Header isInContinent={true} />
      <ContinentBanner continent={continent} />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <ContinentContent continent={continent} />
        <Cities />
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
