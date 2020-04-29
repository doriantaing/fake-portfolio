import React from "react";
import {Text} from "../../atoms/text/text";
import {Colors} from "../../../helpers/colors";
import styled from "styled-components";

const StyledNav = styled.header`
  font-size: 16px;
  color: ${ Colors.black };
  display : flex;
  width : 100%;
  justify-content: space-between;
    padding-right: 96px;
    padding-left: 96px;
    cursor : pointer;
`;


const NavLeft = styled.div`
  font-size: 20px;
  color: ${ Colors.darkblue };
`;

const NavRight = styled.div`
  font-size: 20px;
  color: ${ Colors.darkblue };
  display: flex;
`;


export const Header = ({ }) => (
    <StyledNav>
        <NavLeft>
            <Text color={Colors.darkblue} type={"buttonSmall"}>Agency</Text>
        </NavLeft>
        <NavRight>
            <Text color={Colors.black} type={"buttonNav"}>Work</Text>
            <Text color={Colors.black} type={"buttonNav"}>About</Text>
            <Text color={Colors.black} type={"buttonSmall"}>Contact</Text>
        </NavRight>
    </StyledNav>
);