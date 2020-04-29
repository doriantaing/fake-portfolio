import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryTitle, SecondaryTitle, TertiaryTitle, ProjectTitle } from './Title.styles';

const types = {
  h1: PrimaryTitle,
  h2: SecondaryTitle,
  h3: TertiaryTitle,
  projectTitle: ProjectTitle,
};

const Title = ({ children, type, testId, isUppercase }) => {
  const TitleElement = types[type || "h1"];
  return <TitleElement data-testid={testId} textUppercase={isUppercase}>{ children }</TitleElement>
};

Title.defaultProps = {
  type: 'h1'
};

Title.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.oneOf(['primary','secondary','tertiary']).isRequired,
  isUppercase: PropTypes.bool
};

export default Title;
