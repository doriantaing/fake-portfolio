import styled from 'styled-components';
import { Container } from "components/layouts/container";

export const GalleryContainer = styled(Container)`
  margin-right: 0;
  margin-top: 6.5rem;
  overflow: hidden;
`;

export const GalleryList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  transform: translate3d(${ props => props.translateList }px, 0, 0);
  transition: .5s;
  width: 2000px;
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

export const GalleryDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 6rem;
  width: 506px;
`;

export const GalleryFooter = styled.div`
  margin-top: 6.5rem;
  margin-right: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
