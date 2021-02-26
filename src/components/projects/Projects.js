import { Accordion, Flex, Box } from "@chakra-ui/react";

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
    <Box paddingX={[null, "10%", "20%"]} minW={[null, null, null, 600]}>
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
    </Box>
  </Flex>
);

export default Projects;
