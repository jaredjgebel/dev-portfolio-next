import { Flex, Grid } from "@chakra-ui/react";

import { HeaderOne, HeaderTwo, HeaderThree } from "../header/Headers";

const Hero = () => (
  <Grid
    gridTemplateRows="1fr 1fr"
    minH="100vh"
    padding={[4, 10, 10, 10]}
    backgroundColor="linear-gradient(90deg, hsla(33, 21%, 81%, 1) 0%, hsla(26, 7%, 80%, 1) 100%)"
    backgroundImage={`url('/svg/topography.svg')`}
  >
    <Flex flexDir="column" align="flex-end">
      <HeaderOne fontStyle="italic">Jared Gebel</HeaderOne>
      <HeaderTwo fontStyle="italic" fontWeight="500">
        Web Developer
      </HeaderTwo>
    </Flex>

    <Flex flexDir="column" align="flex-end" justify="flex-end">
      <HeaderThree fontStyle="italic" fontWeight="500">
        JavaScript • React • Node.js
      </HeaderThree>
      <HeaderThree fontStyle="italic" fontWeight="500">
        HTML • CSS • Express • REST APIs
      </HeaderThree>
    </Flex>
  </Grid>
);

export default Hero;
