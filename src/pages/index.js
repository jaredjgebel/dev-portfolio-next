import Hero from "../components/Hero";

export async function getStaticProps() {
  const projects = (await import("../data/projects.json")).default;

  return {
    props: {
      projects,
    },
  };
}

const Index = ({ projects }) => <Hero />;

export default Index;
