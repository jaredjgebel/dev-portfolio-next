import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Flex,
  Text,
  Heading,
  IconButton,
  Image,
  Link,
} from "@chakra-ui/react";

import GithubIcon from "../icons/github/Github";

const Project = ({ project }) => {
  const {
    title,
    subtitle,
    demos,
    github,
    projectHighlights,
    technologies,
  } = project;

  return (
    <AccordionItem>
      <h2>
        <AccordionButton flex="1" justifyContent="space-between">
          <Heading as="h3" fontSize={["md", "lg", "xl"]}>
            {title}
          </Heading>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={12}>
        <Text mb={4}>{subtitle}</Text>
        <ul>
          {projectHighlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>

        <Heading as="h4" size="sm" mt={4}>
          Technologies
        </Heading>

        <p>
          {technologies.map((technology, i) => {
            const hasNoComma = i === technologies.length - 1;

            return (
              <a
                href={technology.link}
                target="_blank"
                rel="noreferrer"
                key={i}
              >
                {technology.name}
                {hasNoComma ? "" : ", "}
              </a>
            );
          })}
        </p>

        {demos.length !== 0 && (
          <>
            <Heading as="h4" size="sm" my={4} textAlign="center">
              Demo
            </Heading>

            {demos.map((demo, i) => {
              return (
                <Flex key={i} paddingBottom={8} margin="0 auto">
                  <Link href={demo.link} isExternal>
                    <Image
                      src={demo.image}
                      alt="Demo"
                      width="100%"
                      height="auto"
                    />
                  </Link>
                </Flex>
              );
            })}
          </>
        )}
        <Flex justifyContent="center" mt={4}>
          <Link href={github} isExternal>
            <IconButton
              aria-label={`Github`}
              name={`Github for ${title}`}
              size="lg"
              icon={<GithubIcon boxSize={12} />}
            />
          </Link>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Project;
