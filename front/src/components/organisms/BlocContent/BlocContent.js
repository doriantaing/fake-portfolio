import React from 'react';
import { ContentContainer, ContentImg, ContentLeft, ContentRight, ContentTitle } from "./BlocContent.styles";
import Title from "components/atoms/Title/Title";
import Text from "components/atoms/Text/Text";
import PropTypes from 'prop-types';

const BlocContent = ({ rowReverse, title, text, image }) => {
  return (
    <ContentContainer reverse={rowReverse}>
      <ContentLeft>
        <ContentTitle>
          <Title type="projectTitle" isUppercase={true}>{ title }</Title>
        </ContentTitle>
        <Text color="tertiary">{ text }</Text>
      </ContentLeft>
      <ContentRight>
        <ContentImg src={image} />
      </ContentRight>
    </ContentContainer>
  )
};

BlocContent.defaultProps = {
  rowReverse: false
};

BlocContent.propTypes = {
  rowReverse: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string
};

export default BlocContent;
