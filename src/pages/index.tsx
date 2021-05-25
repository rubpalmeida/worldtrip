import { Divider } from "@chakra-ui/layout";
import { GetStaticProps } from "next";

import Prismic from '@prismicio/client'

import { Banner } from "../components/Banner";
import { ContinentsComponent } from "../components/ContinentsComponent";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import { getPrismicClient } from "../services/prismic";

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

  console.log(continents)

  return (
    <>
      <Header />

      <Banner />

      <TravelTypes />

      <Divider mx="auto" w="90px" borderColor="gray.600" />

      <ContinentsComponent continents={continents} />

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'continents'),
  ], {
    // fetch: ['continents.title', 'continents.subtitle', 'continents.data.banner.url']
  })

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
