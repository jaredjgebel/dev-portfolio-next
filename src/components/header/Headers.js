import { Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

const headingOneFontSizes = ["42px", "56px", "64px", "80px"];
const headingTwoFontSizes = ["28px", "34px", "42px", "50px"];
const headingThreeFontSizes = ["18px", "24px", "28px", "32px"];

export const HeaderOne = ({ children, ...props }) => (
  <Heading as="h1" fontWeight="bold" fontSize={headingOneFontSizes} {...props}>
    {children}
  </Heading>
);

export const HeaderTwo = ({ children, ...props }) => (
  <Heading as="h2" fontWeight="bold" fontSize={headingTwoFontSizes} {...props}>
    {children}
  </Heading>
);

export const HeaderThree = ({ children, ...props }) => (
  <Heading
    as="h3"
    fontWeight="bold"
    fontSize={headingThreeFontSizes}
    {...props}
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
