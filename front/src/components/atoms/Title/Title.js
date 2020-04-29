import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryTitle, SecondaryTitle, TertiaryTitle } from './Title.styles';

const types = {
  h1: PrimaryTitle,
  h2: SecondaryTitle,
  h3: TertiaryTitle
};

const Title = ({ children, type, testId, isUppercase }) => {
  const TitleElement = types[type || "primary"];
  return <TitleElement data-testid={testId} textUppercase={isUppercase}>{ children }</TitleElement>
};

Title.defaultProps = {
  type: 'primary'
};

Title.propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(types)).isRequired,
  testId: PropTypes.string,
  isUppercase: PropTypes.bool
};

export default Title;
