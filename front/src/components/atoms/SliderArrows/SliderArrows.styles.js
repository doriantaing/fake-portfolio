import styled from 'styled-components';
import { ReactComponent as PrevIcon } from "assets/icons/arrow-prev.svg";
import { ReactComponent as NextIcon } from "assets/icons/arrow-next.svg";

export const ArrowsContainer = styled.div`
  margin-top: 1rem;
`;

export const ArrowLeft = styled(PrevIcon)`
  opacity: ${ props => props.isDisabled ? .5 : 1 };
  pointer-events: ${ props => props.isDisabled ? "none" : "normal" };
  fill: ${ props => props.theme.colors.white };
  width: 20px;
  height: 20px;
  background: ${ props => props.theme.colors.blue };
  border-radius: 50%;
  padding: .5rem;
  cursor: pointer;
  transition: .5s;
  margin-right: 1rem;
`;

export const ArrowRight = styled(NextIcon)`
  opacity: ${ props => props.isDisabled ? .5 : 1 };
  pointer-events: ${ props => props.isDisabled ? "none" : "normal" };
  fill: ${ props => props.theme.colors.white };
  width: 20px;
  height: 20px;
  background: ${ props => props.theme.colors.blue };
  border-radius: 50%;
  padding: .5rem;
  cursor: pointer;
  transition: .5s;
`;
