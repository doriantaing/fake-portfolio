import React, { useState } from 'react';
import {
  GalleryContainer,
  GalleryImg,
  GalleryList,
  GalleryListItem,
  GalleryTitle
} from "./GalleryProject.styles";
import TempImage from 'assets/img/temp-project1.png';
import SliderDots from "components/atoms/SliderDots/SliderDots";
import SliderArrows from "components/atoms/SliderArrows/SliderArrows";

const GalleryProject = () => {
  const data = [
    {
      title: 'Project 1',
      img: TempImage
    },
    {
      title: 'Project 2',
      img: TempImage
    },
    {
      title: 'Project 3',
      img: TempImage
    }
  ];
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
            <GalleryImg src={item.img} isActive={i === activeProject}/>
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

export default GalleryProject;
