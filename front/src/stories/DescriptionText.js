import React from "react";
import { Text } from "components/atoms/Text/Text";
import PropTypes from 'prop-types';

export const DescriptionText = ({ fontFamily, fontSize, fontWeight, lineHeight }) => (
  <Text color="primary" type="text">
    <b>Font-family:</b> { fontFamily }   -   Font-size: { fontSize } - Font-weight: { fontWeight } - Line-height: { lineHeight }
  </Text>
);

DescriptionText.propTypes = {
  fontFamily: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
