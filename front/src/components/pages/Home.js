import React, { useContext, useEffect, useState } from "react";
import { getAboutSection } from "utils/http";
import GalleryProject from "components/organisms/GalleryProject/GalleryProject";
import { Container } from "components/layouts/container";
import ContactSection from "components/organisms/ContactSection/ContactSection";
import { Header } from "components/molecules/Header/Header";
import BlocContent from "components/organisms/BlocContent/BlocContent";
import About from "components/layouts/about";
import ProjectContext from "contexts/project.context";

const Home = () => {
  const [aboutData, setAbout] = useState(null);
  const { projectsData, fetchAllProjects } = useContext(ProjectContext);

  useEffect(() => {
    !projectsData && fetchAllProjects();
    const aboutSection = async() => await getAboutSection();

    aboutSection().then(data => setAbout(data))
  }, [projectsData, fetchAllProjects]);

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
