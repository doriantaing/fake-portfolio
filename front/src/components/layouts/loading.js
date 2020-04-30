import styled from "styled-components";

const Loading = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: ${ props => props.theme.fonts.redHat};
  font-size: 40px;
  margin: 0;
`;

export default Loading;
