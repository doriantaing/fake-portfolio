import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryTitle, SecondaryTitle, TertiaryTitle } from './title.styles';

const categories = {
  primary: PrimaryTitle,
  secondary: SecondaryTitle,
  tertiary: TertiaryTitle
};

export const TypograpyTitle = ({ children, category }) => {
  const Title = categories[category || "primary"];
  return <Title>{ children }</Title>
};

TypograpyTitle.propTypes = {
  children: PropTypes.element.isRequired,
  category: PropTypes.oneOf(['primary','secondary','tertiary']).isRequired
};
