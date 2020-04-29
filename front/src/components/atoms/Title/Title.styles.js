import styled from 'styled-components';

export const PrimaryTitle = styled.h1`
    font-family: ${ props => props.theme.fonts.redHat };
    font-weight: 900;
    font-size: 38px;
    line-height: normal;
    color: ${ props => props.theme.colors.black };
`;

export const SecondaryTitle = styled.h2`
    font-family: ${ props => props.theme.fonts.redHat };
    font-weight: 900;
    font-size: 32px;
    line-height: 42px;
`;

export const TertiaryTitle = styled.h3`
    font-family: ${ props => props.theme.fonts.redHat };
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;
`;
