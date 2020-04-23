import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryTitle, SecondaryTitle, TertiaryTitle } from './title.styles';

const categories = {
  primary: PrimaryTitle,
  secondary: SecondaryTitle,
  tertiary: TertiaryTitle
};

export const Title = ({ children, category }) => {
  const TitleElement = categories[category || "primary"];
  return <TitleElement>{ children }</TitleElement>
};

Title.propTypes = {
  children: PropTypes.element.isRequired,
  category: PropTypes.oneOf(['primary','secondary','tertiary']).isRequired
};
