import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

import { HeaderThree } from "../header/Headers";

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
          <HeaderThree>{title}</HeaderThree>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>
        <p>{subtitle}</p>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Project;
