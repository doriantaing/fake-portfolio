import styled from "styled-components";
import {Colors} from "../../../helpers/colors";
import {Text} from "../text/text";
import React from 'react';



const StyledButton = styled.button`
  font-size: 16px;
  color: ${ Colors.white };
  background-color : ${ Colors.darkblue };
  width : 163px;
  border-radius : 8px;
  height : 64px;
`;

export const Button = ({children}) =>(
<StyledButton>
    <Text color={Colors.white} type={"buttonTitle"}> {children} </Text>
</StyledButton>

);