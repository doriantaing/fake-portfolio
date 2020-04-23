import { Text } from "components/atoms/text/text";
import React from "react";

export const DescriptionText = ({ fontFamily, fontSize, fontWeight, lineHeight }) => (
  <Text color="primary" type="text">
    <b>Font-family:</b> { fontFamily }   -   Font-size: { fontSize } - Font-weight: { fontWeight } - Line-height: { lineHeight }
  </Text>
);
