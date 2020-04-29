import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer, InputLabel, StyledInput } from "./Input.styles";

const Input = ({ label, value, inputType, changeEvent }) => {
  return (
    <InputContainer>
      <InputLabel
        isFocus={ value !== "" }
      >
        { label }
      </InputLabel>
      <StyledInput
        type={inputType}
        value={value}
        onChange={changeEvent}
        isFocus={value !== ""}
      />
    </InputContainer>
  )
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(['text', 'email', 'password']).isRequired,
  changeEvent: PropTypes.func.isRequired
};

export default Input;
