import React from 'react';
import Text from "./Text";

export default {
  title: 'Atoms|Text',
  component: Text
}

export const DefaultText = () => <Text color="tertiary" type="defaultText" testId="default-text">Body/Text</Text>;

export const MediumText = () => <Text color="secondary" type="mediumText" testId="medium-text">Button/Title</Text>;

export const SmallText = () => <Text color="primary" type="smallText" testId="small-text">Button/Small Title</Text>;
