import React from "react";
import Text from "components/atoms/Text/Text";
import styled from "styled-components";
import { theme } from "styles/theme";

const StyledNav = styled.header`
  font-size: 16px;
  color: ${ props => props.theme.colors.black };
  display : flex;
  width : calc(100% - 12rem);
  justify-content: space-between;
  padding-right: 6rem;
  padding-left: 6rem;
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

const NavItem = styled.div`
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;


export const Header = () => (
    <StyledNav>
        <NavLeft>
            <Text color={theme.colors.darkblue} type="smallText">Agency</Text>
        </NavLeft>
        <NavRight>
            <NavItem>
                <Text color="blue" type="smallText">Work</Text>
            </NavItem>
            <NavItem>
                <Text color="blue" type="smallText">About</Text>
            </NavItem>
            <NavItem>
                <Text color="blue" type="smallText">Contact</Text>
            </NavItem>
        </NavRight>
    </StyledNav>
);
