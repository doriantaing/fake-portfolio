import React from 'react';
import styled from "styled-components";
import Text from "../Text/Text";
import PropTypes from 'prop-types';


const StyledButton = styled.button`
  font-size: 16px;
  color: ${ props => props.theme.colors.white };
  background-color : ${ props => props.theme.colors.blue };
  width : 163px;
  border-radius : 8px;
  height : 64px;
  border: none;
`;

const Button = ({ children, clickEvent, ...props }) => (
    <StyledButton {...props} onClick={clickEvent} data-testid="default-button">
        <Text color="white" type="mediumText">{ children }</Text>
    </StyledButton>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  clickEvent: PropTypes.func
};

export default Button;
