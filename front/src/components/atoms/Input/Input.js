import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer, InputLabel, StyledInput } from "./Input.styles";

const Input = ({ label, value, inputType, changeEvent, fieldKey, testId }) => {
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
        data-testid={testId}
      />
    </InputContainer>
  )
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  inputType: PropTypes.oneOf(['text', 'email', 'password']),
  changeEvent: PropTypes.func,
  fieldKey: PropTypes.string,
  testId: PropTypes.string
};

export default Input;
