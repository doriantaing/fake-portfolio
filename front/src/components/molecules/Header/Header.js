import React from "react";
import Text from "components/atoms/Text/Text";
import styled from "styled-components";
import { theme } from "styles/theme";

const StyledNav = styled.header`
  font-size: 16px;
  color: ${ props => props.theme.colors.black };
  display : flex;
  width : 100%;
  justify-content: space-between;
  padding-right: 96px;
  padding-left: 96px;
  cursor : pointer;
`;


const NavLeft = styled.div`
  font-size: 20px;
  color: ${ props => props.theme.colors.blue };
`;

const NavRight = styled.div`
  font-size: 20px;
  color: ${ props => props.theme.colors.blue };
  display: flex;
`;


export const Header = () => (
    <StyledNav>
        <NavLeft>
            <Text color={theme.colors.darkblue} type="smallText">Agency</Text>
        </NavLeft>
        <NavRight>
            <Text color={theme.colors.black} type="buttonNav">Work</Text>
            <Text color={theme.colors.black} type="buttonNav">About</Text>
            <Text color={theme.colors.black} type="smallText">Contact</Text>
        </NavRight>
    </StyledNav>
);
