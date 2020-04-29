import SliderDots from "./SliderDots";
import React from "react";
import TempImage from "assets/img/temp-project1.png";

export default {
  title: 'Atoms|SliderDots',
  component: SliderDots
}

const data = [0, 1, 2];

export const Dots = () => <SliderDots  slideData={data} activeSlide={0}/>;
