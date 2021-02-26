import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jared Gebel, Web Developer</title>
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
