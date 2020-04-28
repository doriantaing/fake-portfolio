import React from "react";
import { Colors } from "helpers/colors";
import { Fonts } from "helpers/fonts";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const types = {
  defaultText: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 'normal',
    fontFamily: Fonts.questrial
  },
  mediumText: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 900,
    fontFamily: Fonts.redHat
  },
  smallText: {
    fontSize: '14px',
    lineHeight: '24px',
    fontWeight: 'normal',
    fontFamily: Fonts.redHat
  }
};

const colors = {
  primary: Colors.black,
  secondary: Colors.red,
  tertiary: Colors.grey
};

const StyledText = styled.p`
  font-size: ${ props => types[props.type].fontSize};
  font-family: ${ props => types[props.type].fontFamily};
  font-weight: ${ props => types[props.type].fontWeight};
  line-height: ${ props => types[props.type].lineHeight};
  color: ${ props => colors[props.color] };
`;

export const Text = ({ children, type, color, testId  }) => (
  <StyledText
    type={type}
    color={color}
    data-testid={testId}
  >
    { children }
  </StyledText>
);

Text.defaultProps = {
  type: 'defaultText',
  color: 'primary'
};

Text.propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(types)).isRequired,
  color: PropTypes.oneOf(Object.keys(colors)).isRequired,
  testId: PropTypes.string
};
