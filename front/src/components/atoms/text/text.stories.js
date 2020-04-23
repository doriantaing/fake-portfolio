import React from 'react';
import { Text } from "./text";

export default {
  title: 'Atoms/Text'
}

export const Default = () => <Text color="tertiary" type="text">Body/Text</Text>;

export const ButtonTitle = () => <Text color="secondary" type="buttonTitle">Button/Title</Text>;

export const ButtonSmall = () => <Text color="primary" type="buttonSmall">Button/Small Title</Text>;
