import { TypograpyTitle } from "./title";
import React from "react";
import { Fonts } from "helpers/fonts";
import styled from 'styled-components';

export default {
  title: `Atoms/Title`
};

const Text = styled.p`
  font-family: ${ Fonts.questrial };
  font-size: 16px;
`;

const DescriptionText = ({ fontFamily, fontSize, fontWeight, lineHeight }) => (
  <Text><b>Font-family:</b> { fontFamily }   -   Font-size: { fontSize } - Font-weight: { fontWeight } - Line-height: { lineHeight }</Text>
);

export const h1 = () => (
  <div>
    <TypograpyTitle category="primary">Title/H1</TypograpyTitle>
    <DescriptionText fontFamily="Red Hat Display" fontSize="38px" fontWeight="Black" lineHeight="auto"/>
  </div>
);
export const h2 = () => (
  <div>
    <TypograpyTitle category="secondary">Title/H2</TypograpyTitle>
    <DescriptionText fontFamily="Red Hat Display" fontSize="32px" fontWeight="Black" lineHeight="42"/>
  </div>
);
export const h3 = () => (
  <div>
    <TypograpyTitle category="tertiary">Title/H3</TypograpyTitle>
    <DescriptionText fontFamily="Red Hat Display" fontSize="24px" fontWeight="Black" lineHeight="32"/>
  </div>
);
