import { Divider, Heading } from "@chakra-ui/layout";
import { GetStaticProps } from "next";

import Prismic from '@prismicio/client'

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { getPrismicClient } from "../services/prismic";
import { TravelTypes } from "../components/TravelTypes/index";
import { Slider } from "../components/Swiper";

interface Continents {
  slug: string;
  title: string;
  subtitle: string;
  banner: string;
}

interface ContinentsProps {
  continents: Continents[]
}

export default function Home({ continents }: ContinentsProps): JSX.Element {

  return (
    <>
      <Header isInContinent={false} />

      <Banner />

      <TravelTypes />

      <Divider mt={["9", "20"]} mx="auto" w={["60px", "90px"]} borderColor="gray.600" />

      <Heading
        fontSize={["lg", "2xl", "4xl"]}
        color="gray.600"
        textAlign="center"
        my={["5", "14"]}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <Slider continents={continents} />

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'continents'),
  ], {})

  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      subtitle: continent.data.subtitle,
      banner: continent.data.banner.url
    }
  })

  return {
    props: { continents },
  };
}
