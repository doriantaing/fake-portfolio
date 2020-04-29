import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
`;

export const InputLabel = styled.label`
  color: ${ props => props.theme.colors.blue };
  font-family: ${ props => props.theme.fonts.questrial };
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const StyledInput = styled.input`
  border: 1px solid ${ props => props.theme.colors.blue };
  border-radius: 8px;
  padding: 23px 16px;
  min-width: 498px;
  font-size: 16px;
`;
