import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer, InputLabel, StyledInput } from "./Input.styles";

const Input = ({ label, value, inputType, changeEvent, fieldKey }) => {
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
        onChange={e => changeEvent(fieldKey, e.target.value)}
        isFocus={value !== ""}
      />
    </InputContainer>
  )
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(['text', 'email', 'password']).isRequired,
  changeEvent: PropTypes.func.isRequired,
  fieldKey: PropTypes.string
};

export default Input;
