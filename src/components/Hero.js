import Image from "next/image";
import { Flex, Grid, Heading } from "@chakra-ui/react";

const headingOneFontSizes = ["42px", "56px", "64px", "80px"];
const headingTwoFontSizes = ["28px", "34px", "42px", "50px"];
const headingThreeFontSizes = ["20px", "24px", "28px", "32px"];

const Hero = () => (
  <Grid
    gridTemplateRows="1fr 1fr"
    minH="100vh"
    padding={[4, 10, 10, 10]}
    backgroundImage={`linear-gradient(90deg, hsla(33, 21%, 81%, 1) 0%, hsla(26, 7%, 80%, 1) 100%)`}
  >
    <Image src="/svg/topography.svg" layout="fill" objectFit="cover" />
    <Flex flexDir="column" align="flex-end">
      <Heading
        as="h1"
        fontWeight="bold"
        fontStyle="italic"
        fontSize={headingOneFontSizes}
      >
        Jared Gebel
      </Heading>
      <Heading
        as="h2"
        fontWeight="500"
        fontStyle="italic"
        fontSize={headingTwoFontSizes}
      >
        Web Developer
      </Heading>
    </Flex>

    <Flex flexDir="column" align="flex-end" justify="flex-end">
      <Heading
        as="h3"
        fontWeight="500"
        fontStyle="italic"
        fontSize={headingThreeFontSizes}
      >
        JavaScript • React • Node.js
      </Heading>
      <Heading
        as="h3"
        fontWeight="500"
        fontStyle="italic"
        fontSize={headingThreeFontSizes}
      >
        HTML • CSS • Express • REST APIs
      </Heading>
    </Flex>
  </Grid>
);

export default Hero;
