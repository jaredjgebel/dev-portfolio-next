import Image from "next/image";
import { Flex, Grid } from "@chakra-ui/react";

import { HeaderOne, HeaderTwo, HeaderThree } from "../header/Headers";

const Hero = () => (
  <Grid
    gridTemplateRows="1fr 1fr"
    minH="100vh"
    padding={[4, 10, 10, 10]}
    backgroundImage={`linear-gradient(90deg, hsla(33, 21%, 81%, 1) 0%, hsla(26, 7%, 80%, 1) 100%)`}
  >
    <Image src="/svg/topography.svg" layout="fill" objectFit="cover" />
    <Flex flexDir="column" align="flex-end">
      <HeaderOne>Jared Gebel</HeaderOne>
      <HeaderTwo>Web Developer</HeaderTwo>
    </Flex>

    <Flex flexDir="column" align="flex-end" justify="flex-end">
      <HeaderThree>JavaScript • React • Node.js</HeaderThree>
      <HeaderThree>HTML • CSS • Express • REST APIs</HeaderThree>
    </Flex>
  </Grid>
);

export default Hero;
