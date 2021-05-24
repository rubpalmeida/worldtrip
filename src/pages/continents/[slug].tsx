import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "../../components/Header";

export default function Continent() {
  return (
    <Header />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {}
  }
}
