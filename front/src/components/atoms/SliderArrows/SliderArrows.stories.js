import React from 'react';
import SliderArrows from "./SliderArrows";

export default {
  title: 'Atoms|SliderArrows',
  component: SliderArrows
}

export const Arrows = () => {
  return (
    <SliderArrows
      sliderLength={3}
     currentSlide={0}
    />
  )
};
