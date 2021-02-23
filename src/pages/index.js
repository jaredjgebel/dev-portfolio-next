import { Heading } from "@chakra-ui/react";

export async function getStaticProps() {
  const projects = (await import("../data/projects.json")).default;

  return {
    props: {
      projects,
    },
  };
}

const Index = ({ projects }) => (
  <>
    {projects.map((project) => (
      <Heading as="h2">{project.title}</Heading>
    ))}
  </>
);

export default Index;
