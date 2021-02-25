import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";

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
    <Hero />
    <Projects projects={projects} />
  </>
);

export default Index;
