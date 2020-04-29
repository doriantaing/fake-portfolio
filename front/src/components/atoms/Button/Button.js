import React from 'react';
import styled from "styled-components";
import Text from "../Text/Text";
import PropTypes from 'prop-types';
import { theme } from 'styles/theme';


const StyledButton = styled.button`
  font-size: 16px;
  color: ${ props => props.theme.colors.white };
  background-color : ${ props => props.theme.colors.blue };
  width : 163px;
  border-radius : 8px;
  height : 64px;
  border: none;
`;

const Button = ({ children }) => (
    <StyledButton>
        <Text color={theme.colors.white} type="mediumText">{ children }</Text>
    </StyledButton>
);

Button.propTypes = {
  children: PropTypes.element
};

export default Button;
