import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer, InputLabel, StyledInput } from "./Input.styles";

const Input = ({ label, value, inputType }) => {
  return (
    <InputContainer>
      <InputLabel>{ label }</InputLabel>
      <StyledInput
        type={inputType}
        value={value}
      />
    </InputContainer>
  )
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(['text', 'email', 'password']).isRequired
};

export default Input;
