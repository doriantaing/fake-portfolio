import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const StyledArea = styled.textarea`
  border: 1px solid ${ props => props.isFocus ? props.theme.colors.blue : props.theme.colors.lightGrey };
  background: ${ props => props.isFocus ? props.theme.colors.white : props.theme.colors.disabled };
  padding: 1.5rem 1rem;
  font-size: 16px;
  color: ${ props => props.theme.colors.black };
  font-family: ${ props => props.theme.fonts.questrial };
  line-height: 26px;
  min-width: 498px;
  min-height: 178px;
  border-radius: .5rem;
  outline: none;
  transition: .5s;
  &::placeholder {
    color: ${ props => props.theme.colors.grey };
  }
`;

const Textarea = ({ placeholder, value, changeEvent, fieldKey }) => {
  return (
    <StyledArea
      placeholder={placeholder}
      value={value}
      onChange={e => changeEvent(fieldKey, e.target.value)}
      isFocus={value !== ""}
      data-testid="default-textarea"
    />
  )
};

Textarea.PropsTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  fieldKey: PropTypes.string.isRequired,
  changeEvent: PropTypes.func.isRequired,
};

export default Textarea;
