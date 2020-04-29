import React, { useEffect, useState } from "react";
import GalleryProject from "components/organisms/GalleryProject/GalleryProject";
import { Container } from "components/layouts/container";
import ContactSection from "components/organisms/ContactSection/ContactSection";
import { getProjects } from "utils/http";
import { Header } from "components/molecules/Header/Header";

const Home = () => {
  const [projectsData, setProjects] = useState(null);

  useEffect(() => {
    const allProjects = async() => await getProjects();
    allProjects().then(data => setProjects(data))
  }, []);

  if (!projectsData) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Header />
      <GalleryProject data={projectsData} />
      <Container>
        <ContactSection />
      </Container>
    </>
  )
};

export default Home;
