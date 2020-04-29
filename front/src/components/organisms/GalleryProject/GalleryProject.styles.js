import styled from 'styled-components';
import { Container } from "components/layouts/Container";

export const GalleryContainer = styled(Container)`
  margin-right: 0;
`;

export const GalleryList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  overflow: scroll;
`;

export const GalleryListItem = styled.li`
  width: 506px;
  &:not(:last-child) {
    margin-right: 1.5rem;
  }
  &:last-child {
    img {
      margin-right: 506px;
    }
  }
`;

export const GalleryImg = styled.img`
  opacity: ${ props => props.isActive ? 1 : 0.5 };
  transition: .5s;
`;

export const GalleryTitle = styled.h2``;

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
