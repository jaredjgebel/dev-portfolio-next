import { Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

const headingOneFontSizes = ["42px", "56px", "64px", "80px"];
const headingTwoFontSizes = ["28px", "34px", "42px", "50px"];
const headingThreeFontSizes = ["20px", "24px", "28px", "32px"];

export const HeaderOne = ({ children }) => (
  <Heading
    as="h1"
    fontWeight="bold"
    fontStyle="italic"
    fontSize={headingOneFontSizes}
  >
    {children}
  </Heading>
);

export const HeaderTwo = ({ children }) => (
  <Heading
    as="h2"
    fontWeight="500"
    fontStyle="italic"
    fontSize={headingTwoFontSizes}
  >
    {children}
  </Heading>
);

export const HeaderThree = ({ children }) => (
  <Heading
    as="h3"
    fontWeight="500"
    fontStyle="italic"
    fontSize={headingThreeFontSizes}
  >
    {children}
  </Heading>
);

HeaderOne.propTypes = {
  children: PropTypes.string.isRequired,
};

HeaderTwo.propTypes = {
  children: PropTypes.string.isRequired,
};

HeaderThree.propTypes = {
  children: PropTypes.string.isRequired,
};
