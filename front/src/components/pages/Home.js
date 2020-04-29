import React from "react";
import GalleryProject from "components/organisms/GalleryProject/GalleryProject";
import { Container } from "components/layouts/container";
import ContactSection from "components/organisms/ContactSection/ContactSection";

const Home = () => {
  return (
    <>
      <GalleryProject />
      <Container>
        <ContactSection />
      </Container>
    </>
  )
};

export default Home;
