import { Divider } from "@chakra-ui/layout";
import { Banner } from "../components/Banner";
import { Continents } from "../components/Continents";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Header />

      <Banner />

      <TravelTypes />

      <Divider mx="auto" w="90px" borderColor="gray.600" />

      <Continents />

    </>
  )
}
