import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import Main from "../components/layouts/main";

export default function Home() {
  return (
    <Main>
      <Heading as="h1" size="lg">
        Next.js & Three.js website
      </Heading>
    </Main>
  );
}
