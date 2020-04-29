import React from 'react';
import { ArrowLeft, ArrowRight, ArrowsContainer, IconArrowLeft, IconArrowRight } from "./SliderArrows.styles";
import PropsTypes from "prop-types";

const SliderArrows = ({ sliderLength, currentSlide, prevAction, nextAction }) => {
  return (
    <ArrowsContainer>
      <ArrowLeft onClick={() => prevAction(true)} isDisabled={currentSlide === 0}>
        <IconArrowLeft />
      </ArrowLeft>
      <ArrowRight onClick={() => nextAction(false)} isDisabled={currentSlide === sliderLength - 1}>
        <IconArrowRight />
      </ArrowRight>
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
