import React from "react";
import Text from "components/atoms/Text/Text";
import styled from "styled-components";
import { theme } from "styles/theme";
import { Link } from 'react-router-dom';
import { scrollToSection } from "../../../utils/windowScroll";

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
  p {
    cursor: pointer;
  }
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const NavHome = styled(Link)`
  text-decoration: none;
`;


export const Header = () => (
    <StyledNav>
        <NavLeft>
            <NavHome to="/">
                <Text color={theme.colors.darkblue} type="smallText">Agency</Text>
            </NavHome>
        </NavLeft>
        <NavRight>
            <NavItem>
                <Text color="blue" type="smallText">Work</Text>
            </NavItem>
            <NavItem onClick={() => scrollToSection(0)}>
                <Text color="blue" type="smallText">About</Text>
            </NavItem>
            <NavItem onClick={() => scrollToSection(1)}>
                <Text color="blue" type="smallText">Contact</Text>
            </NavItem>
        </NavRight>
    </StyledNav>
);
