import styled from 'styled-components';
import { Fonts } from "helpers/fonts";
import { Colors } from "helpers/colors";

export const PrimaryTitle = styled.h1`
    font-family: ${ Fonts.redHat };
    font-weight: 900;
    font-size: 38px;
    line-height: normal;
    color: ${ Colors.black };
`;

export const SecondaryTitle = styled.h2`
    font-family: ${ Fonts.redHat };
    font-weight: 900;
    font-size: 32px;
    line-height: 42px;
`;

export const TertiaryTitle = styled.h3`
    font-family: ${ Fonts.redHat };
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;
`;

export const ProjectTitle = styled.h3`
    font-family: ${ Fonts.redHat };
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;
    color: ${Colors.darkblue}
`;
