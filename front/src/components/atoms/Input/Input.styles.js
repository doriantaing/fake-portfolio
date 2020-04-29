import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
`;

export const InputLabel = styled.label`
  color: ${ props => props.isFocus ? props.theme.colors.blue : props.theme.colors.grey };
  font-family: ${ props => props.theme.fonts.questrial };
  position: absolute;
  left: 16px;
  top: ${ props => props.isFocus ? 0 : "50%"};
  transform: translateY(-50%);
  background: ${ props => props.isFocus ? props.theme.colors .white : "transparent" };
  pointer-events: none;
  transition: .5s;
`;

export const StyledInput = styled.input`
  border: 1px solid ${ props => props.isFocus ? props.theme.colors.blue : props.theme.colors.lightGrey };
  background: ${ props => props.isFocus ? "transparent" : props.theme.colors.disabled };
  border-radius: 8px;
  padding: 23px 16px;
  min-width: 498px;
  font-size: 16px;
  outline: none;
`;
