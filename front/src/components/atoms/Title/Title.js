import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryTitle, SecondaryTitle, TertiaryTitle } from './Title.styles';

const types = {
  h1: PrimaryTitle,
  h2: SecondaryTitle,
  h3: TertiaryTitle
};

export const Title = ({ children, type, testId }) => {
  const TitleElement = types[type || "primary"];
  return <TitleElement data-testid={testId}>{ children }</TitleElement>
};

Title.defaultProps = {
  type: 'primary'
};

Title.propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(types)).isRequired,
  testId: PropTypes.string
};
