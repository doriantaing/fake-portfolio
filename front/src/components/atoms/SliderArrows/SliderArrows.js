import React from 'react';
import { ArrowLeft, ArrowRight, ArrowsContainer } from "./SliderArrows.styles";
import PropsTypes from "prop-types";

const SliderArrows = ({ sliderLength, currentSlide, prevAction, nextAction }) => {
  return (
    <ArrowsContainer>
      <ArrowLeft onClick={() => prevAction(true)} isDisabled={currentSlide === 0} />
      <ArrowRight onClick={() => nextAction(false)} isDisabled={currentSlide === sliderLength - 1} />
    </ArrowsContainer>
  )
};

SliderArrows.propTypes = {
  sliderLength: PropsTypes.number.isRequired,
  currentSlide: PropsTypes.number.isRequired,
  prevAction: PropsTypes.func,
  nextAction: PropsTypes.func,
};

export default SliderArrows;
