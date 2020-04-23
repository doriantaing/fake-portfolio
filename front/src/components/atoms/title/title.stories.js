import { Title } from "./title";
import React from "react";
import { DescriptionText } from "stories/DescriptionText";

export default {
  title: `Atoms/Title`
};

export const h1 = () => (
  <div>
    <Title category="primary">Title/H1</Title>
    <DescriptionText fontFamily="Red Hat Display" fontSize="38px" fontWeight="Black" lineHeight="auto"/>
  </div>
);
export const h2 = () => (
  <div>
    <Title category="secondary">Title/H2</Title>
    <DescriptionText fontFamily="Red Hat Display" fontSize="32px" fontWeight="Black" lineHeight="42"/>
  </div>
);
export const h3 = () => (
  <div>
    <Title category="tertiary">Title/H3</Title>
    <DescriptionText fontFamily="Red Hat Display" fontSize="24px" fontWeight="Black" lineHeight="32"/>
  </div>
);
