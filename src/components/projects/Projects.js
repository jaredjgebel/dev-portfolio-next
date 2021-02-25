import { Accordion, Flex, Container } from "@chakra-ui/react";

import { HeaderTwo } from "../header/Headers";
import Project from "./Project";

const Projects = ({ projects }) => (
  <Flex
    direction="column"
    alignItems="center"
    minHeight="100vh"
    p={[4, 10, 10, 10]}
    backgroundColor="gray.100"
  >
    <Container>
      <HeaderTwo textAlign="center" py={8}>
        Projects
      </HeaderTwo>
      <Flex direction="column" justifyContent="center">
        <Accordion defaultIndex={[0]} allowMultiple pt={4}>
          {projects &&
            projects.map((project) => (
              <Project project={project} key={project.title} />
            ))}
        </Accordion>
      </Flex>
    </Container>
  </Flex>
);

export default Projects;
