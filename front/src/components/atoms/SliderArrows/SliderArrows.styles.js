import styled from 'styled-components';
import { ReactComponent as PrevIcon } from "assets/icons/arrow-prev.svg";
import { ReactComponent as NextIcon } from "assets/icons/arrow-next.svg";

export const ArrowsContainer = styled.div`
  margin-top: 1rem;
`;

export const ArrowLeft = styled.button`
  opacity: ${ props => props.isDisabled ? .5 : 1 };
  pointer-events: ${ props => props.isDisabled ? "none" : "inherit" };
  border: none;
  background: ${ props => props.theme.colors.blue };
  border-radius: 50%;
  cursor: pointer;
  transition: .5s;
  margin-right: 1rem;
  padding: 0;
  display: inline-block;
  width: 40px;
  height: 40px;
  outline: none;
`;

export const IconArrowLeft = styled(PrevIcon)`
  fill: ${ props => props.theme.colors.white };
  width: 20px;
  height: 20px;
`;

export const ArrowRight = styled.button`
  opacity: ${ props => props.isDisabled ? .5 : 1 };
  pointer-events: ${ props => props.isDisabled ? "none" : "inherit" };
  border: none;
  background: ${ props => props.theme.colors.blue };
  border-radius: 50%;
  cursor: pointer;
  transition: .5s;
  margin-right: 1rem;
  padding: 0;
  display: inline-block;
  width: 40px;
  height: 40px;
  outline: none;
`;


export const IconArrowRight = styled(NextIcon)`
  fill: ${ props => props.theme.colors.white };
  width: 20px;
  height: 20px;
`;
