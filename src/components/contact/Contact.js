import { IconButton, Flex, Text, Link } from "@chakra-ui/react";

import GithubIcon from "../icons/github/Github";
import MailIcon from "../icons/mail/Mail";
import LinkedinIcon from "../icons/linkedin/Linkedin";
import { HeaderTwo } from "../header/Headers";

const Contact = () => (
  <Flex
    minHeight="75vh"
    direction="column"
    bgColor="green.700"
    color="whitesmoke"
    justifyContent="space-around"
    alignItems="center"
  >
    <HeaderTwo textAlign="center" paddingY={12}>
      Contact
    </HeaderTwo>

    <Text paddingX={12}>
      I'm available for hire, and I'd love to speak with you about your web
      development needs.
    </Text>

    <Flex width="28rem" justifyContent="space-around">
      <Link href="mailto:jaredjgebel@gmail.com" isExternal>
        <IconButton
          size="lg"
          bgColor="green.700"
          colorScheme="green"
          icon={<MailIcon boxSize={12} />}
        />
      </Link>

      <Link href="https://github.com/jaredjgebel" isExternal>
        <IconButton
          size="lg"
          isRound
          bgColor="green.700"
          colorScheme="green"
          icon={<GithubIcon boxSize={12} />}
        />
      </Link>

      <Link href="https://www.linkedin.com/in/jaredjgebel/" isExternal>
        <IconButton
          size="lg"
          bgColor="green.700"
          colorScheme="green"
          icon={<LinkedinIcon boxSize={12} />}
        />
      </Link>
    </Flex>
  </Flex>
);

export default Contact;
