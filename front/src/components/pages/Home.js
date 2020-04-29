import React, { useEffect, useState } from "react";
import { getProjects, getAboutSection } from "utils/http";
import GalleryProject from "components/organisms/GalleryProject/GalleryProject";
import { Container } from "components/layouts/container";
import ContactSection from "components/organisms/ContactSection/ContactSection";
import { Header } from "components/molecules/Header/Header";
import BlocContent from "components/organisms/BlocContent/BlocContent";
import About from "components/layouts/about";

const Home = () => {
  const [projectsData, setProjects] = useState(null);
  const [aboutData, setAbout] = useState(null);

  useEffect(() => {
    const allProjects = async() => await getProjects();
    const aboutSection = async() => await getAboutSection();
    allProjects().then(data => setProjects(data));
    aboutSection().then(data => setAbout(data))
  }, []);

  if (!projectsData || !aboutData) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Header />
      <GalleryProject data={projectsData} />
      <Container>
        <About>
          <BlocContent
            rowReverse={true}
            title={aboutData.title}
            text={aboutData.text}
            image={aboutData.image.url}
          />
        </About>
        <ContactSection />
      </Container>
    </>
  )
};

export default Home;
