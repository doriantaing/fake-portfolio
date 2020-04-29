import React, { useState } from 'react';
import {
  GalleryContainer,
  GalleryImg,
  GalleryList,
  GalleryListItem,
  GalleryTitle
} from "./GalleryProject.styles";
import SliderDots from "components/atoms/SliderDots/SliderDots";
import SliderArrows from "components/atoms/SliderArrows/SliderArrows";
import * as PropTypes from "prop-types";

const GalleryProject = ({ data }) => {
  const [activeProject, setActive] = useState(0);
  const [listWidth, setListWidth] = useState(0);
  const slideActions = (isPrev = false) => {
    setListWidth(isPrev ? listWidth + 530 : listWidth - 530);
    setActive(isPrev ? activeProject - 1 : activeProject + 1);
  };

  return (
    <GalleryContainer>
      <GalleryList translateList={listWidth}>
        { data.map((item, i) => (
          <GalleryListItem key={i}>
            <GalleryImg src={process.env.REACT_APP_API_URL + item.main_image.url} isActive={i === activeProject}/>
          </GalleryListItem>
        ))}
      </GalleryList>
      <SliderArrows
        currentSlide={activeProject}
        sliderLength={data.length}
        prevAction={slideActions}
        nextAction={slideActions}
      />
      <GalleryTitle>{ data[activeProject].title }</GalleryTitle>
      <SliderDots activeSlide={activeProject} slideData={data} />
    </GalleryContainer>
  )
};

GalleryProject.propTypes = {
  data: PropTypes.array.isRequired
};

export default GalleryProject;
