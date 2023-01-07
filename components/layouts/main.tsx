import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Main: FC<Props> = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>Alex Moore - Homepage</title>
        <meta name="description" content="Alex Moore's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="container.md" pt={12}>
        {children}
      </Container>
    </Box>
  );
};
export default Main;
