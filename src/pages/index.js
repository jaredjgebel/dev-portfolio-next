import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";

export async function getStaticProps() {
  const projects = (await import("../data/projects.json")).default;

  return {
    props: {
      projects,
    },
  };
}

const Index = ({ projects }) => (
  <main>
    <Hero />
    <Projects projects={projects} />
    <Contact />
  </main>
);

export default Index;
