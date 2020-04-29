import React from 'react';
import Text from "./Text";

export default {
  title: 'Atoms/Text'
}

export const defaultText = () => <Text color="tertiary" type="defaultText">Body/Text</Text>;

export const MediumText = () => <Text color="secondary" type="mediumText">Button/Title</Text>;

export const SmallText = () => <Text color="primary" type="smallText">Button/Small Title</Text>;
