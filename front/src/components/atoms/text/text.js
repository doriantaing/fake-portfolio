import React from "react";
import { Colors } from "helpers/colors";
import { Fonts } from "helpers/fonts";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const types = {
  text: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 'normal',
    fontFamily: Fonts.questrial
  },
  buttonTitle: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 900,
    fontFamily: Fonts.redHat
  },
  buttonSmall: {
    fontSize: '14px',
    lineHeight: '24px',
    fontWeight: 'normal',
    fontFamily: Fonts.redHat
  },
    buttonNav: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 'normal',
    fontFamily: Fonts.redHat,
        marginRight: '32px',
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
  margin-right: ${ props => types[props.type].marginRight};
  color: ${ props => colors[props.color] };
`;

export const Text = ({ children, type, color  }) => (
  <StyledText
    type={type}
    color={color}
  >
    { children }
  </StyledText>
);

Text.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.oneOf(['text', 'buttonTitle', 'buttonSmall']).isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired
};
