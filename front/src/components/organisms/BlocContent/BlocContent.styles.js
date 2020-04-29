import styled from "styled-components";

export const ContentLeft = styled.div``;

export const ContentImg = styled.img``;

export const ContentContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: ${ props => props.reverse ? "row-reverse" : "row" };
  justify-content: space-between;
  ${ContentLeft} {
    margin-right: ${ props => props.reverse ? "0" : "8rem"};
  }
  ${ContentImg} {
    margin-right: ${ props => props.reverse ? "8rem" : "0"};
  }
`;


export const ContentTitle = styled.div``;

export const ContentRight = styled.div``;

