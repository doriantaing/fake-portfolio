import styled from 'styled-components';
import { Fonts } from "helpers/fonts";

export const Text = styled.p`
   font-family: ${ Fonts.questrial };
   font-size: 16px;
   line-height: 24px;
   font-weight: normal;
`;

export const TextImportant = styled.p`
   font-family: ${ Fonts.redHat };
   font-weight: 900;
   font-size: 16px;
   line-height: 24px; 
`;

export const SmallText = styled.p`
   font-family: ${ Fonts.redHat };
   font-size: 14px;
   line-height: 24px;
   font-weight: normal;
`;
