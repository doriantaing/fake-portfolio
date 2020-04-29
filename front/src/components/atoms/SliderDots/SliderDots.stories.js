import React from 'react';
import { GalleryDots, GalleryDotsItem } from "./SliderDots.styles";
import PropsTypes from "prop-types";

const SliderDots = ({ activeSlide, slideData }) => {
  return (
    <GalleryDots>
      { slideData.map((item, i) => (
        <GalleryDotsItem key={i} isActive={i === activeSlide}/>
      ))}
    </GalleryDots>
  )
};

SliderDots.PropsTypes = {
  activeSlide: PropsTypes.number,
  slideData: PropsTypes.array
};

export default SliderDots;
