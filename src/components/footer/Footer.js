import { Flex, Text, Heading } from "@chakra-ui/react";

const Footer = () => (
  <Flex
    minH="2rem"
    alignItems="center"
    paddingLeft={4}
    backgroundColor="linear-gradient(90deg, hsla(33, 21%, 81%, 1) 0%, hsla(26, 7%, 80%, 1) 100%)"
    backgroundImage={`url('/svg/topography.svg')`}
  >
    <Heading as="h3" size="sm">
      Website created with Next.js{" "}
    </Heading>
  </Flex>
);

export default Footer;
