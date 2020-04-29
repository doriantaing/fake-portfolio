import React, { useEffect, useRef, useState } from 'react';
import {
  GalleryContainer,
  GalleryDots, GalleryDotsItem,
  GalleryImg,
  GalleryList,
  GalleryListItem,
  GalleryTitle
} from "./GalleryProject.styles";
import TempImage from 'assets/img/temp-project1.png';

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
  const galleryList = useRef(null);
  const eventScroll = e => {
    const clientRect = e.target.children[activeProject].getBoundingClientRect();

    if (clientRect.x <= -410) {
      setActive(activeProject + 1)
    } else if (clientRect.x >= 626 && activeProject > 0){
      setActive(activeProject - 1)
    }
  };

  useEffect(() => {
    // const { current } = galleryList;
    // current.style.width = (506 * current.children.length) + "px";
  });

  return (
    <GalleryContainer>
      <GalleryList onScroll={eventScroll} ref={galleryList}>
        { data.map((item, i) => (
          <GalleryListItem key={i}>
            <GalleryImg src={item.img} isActive={i === activeProject}/>
          </GalleryListItem>
        ))}
      </GalleryList>
      <GalleryTitle>{ data[activeProject].title }</GalleryTitle>
      <GalleryDots>
        { data.map((item, i) => (
          <GalleryDotsItem key={i} isActive={i === activeProject}/>
        ))}
      </GalleryDots>
    </GalleryContainer>
  )
};

export default GalleryProject;
