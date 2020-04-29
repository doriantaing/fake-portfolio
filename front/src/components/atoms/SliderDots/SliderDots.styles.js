import styled from "styled-components";

export const GalleryDots = styled.div`
  display: flex;
  align-items: center;
`;

export const GalleryDotsItem = styled.div`
  width: ${ props => props.isActive ? 16 : 8 }px;
  height: 8px;
  background: ${ props => props.theme.colors.blue };
  opacity: ${ props => props.isActive ? 1 : .25 };
  transition: .5s;
  &:not(:last-child) {
    margin-right: .5rem;
  }
`;
