import React, { useState } from 'react';
import * as PropTypes from "prop-types";
import {
  GalleryContainer, GalleryDescription, GalleryFooter,
  GalleryImg,
  GalleryList,
  GalleryListItem,
} from "./GalleryProject.styles";
import SliderDots from "components/atoms/SliderDots/SliderDots";
import SliderArrows from "components/atoms/SliderArrows/SliderArrows";
import Title from "components/atoms/Title/Title";
import Text from "components/atoms/Text/Text";
import { Link } from "react-router-dom";

const GalleryProject = ({ data }) => {
  const [activeProject, setActive] = useState(0);
  const [listWidth, setListWidth] = useState(0);
  const slideActions = (isPrev = false) => {
    setListWidth(isPrev ? listWidth + 530 : listWidth - 530);
    setActive(isPrev ? activeProject - 1 : activeProject + 1);
  };
  const projectTitle = `0${data[activeProject].id}/ ${data[activeProject].title}`;

  return (
    <GalleryContainer>
      <GalleryList translateList={listWidth}>
        { data.map((item, i) => (
          <GalleryListItem key={i}>
            <Link to={`project/${i}`}>
              <GalleryImg src={process.env.REACT_APP_API_URL + item.main_image.url} isActive={i === activeProject}/>
            </Link>
          </GalleryListItem>
        ))}
      </GalleryList>
      <GalleryDescription>
        <SliderArrows
          currentSlide={activeProject}
          sliderLength={data.length}
          prevAction={slideActions}
          nextAction={slideActions}
        />
        <Title type="projectTitle" isUppercase={true}>{ projectTitle }</Title>
      </GalleryDescription>
      <GalleryFooter>
        <SliderDots activeSlide={activeProject} slideData={data} />
        <Text type="smallText" color="tertiary">Scroll down</Text>
      </GalleryFooter>
    </GalleryContainer>
  )
};

GalleryProject.propTypes = {
  data: PropTypes.array.isRequired
};

export default GalleryProject;
