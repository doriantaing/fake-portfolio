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
import { Container } from "components/layouts/container";
import { API_URL } from "utils/http";

const GalleryProject = ({ data }) => {
  const [activeProject, setActive] = useState(0);
  const [listWidth, setListWidth] = useState(0);
  const slideActions = (isPrev = false) => {
    setListWidth(isPrev ? listWidth + 530 : listWidth - 530);
    setActive(isPrev ? activeProject - 1 : activeProject + 1);
  };
  const projectTitle = data.length > 0 && `0${data[activeProject].id}/ ${data[activeProject].title}`;


  if (data.length === 0) {
    return (
      <Container>
        <div>No data availaible for gallery projects. Please go to http://localhost:1337/admin and fill in data.</div>
      </Container>
    )
  }

  return (
    <GalleryContainer>
      <GalleryList translateList={listWidth}>
        { data.map((item, i) => (
          <GalleryListItem key={i}>
            <Link to={`project/${i}`}>
              <GalleryImg src={item.main_image.url} isActive={i === activeProject}/>
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
