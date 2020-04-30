import React, { useContext, useEffect, useState } from "react";
import { getAboutSection } from "utils/http";
import GalleryProject from "components/organisms/GalleryProject/GalleryProject";
import { Container } from "components/layouts/container";
import ContactSection from "components/organisms/ContactSection/ContactSection";
import { Header } from "components/molecules/Header/Header";
import BlocContent from "components/organisms/BlocContent/BlocContent";
import About from "components/layouts/about";
import ProjectContext from "contexts/project.context";
import Loading from "components/layouts/loading";

const Home = () => {
  const [aboutData, setAbout] = useState(null);
  const { projectsData, fetchAllProjects } = useContext(ProjectContext);

  useEffect(() => {
    !projectsData && fetchAllProjects();
    const aboutSection = async() => await getAboutSection();

    aboutSection().then(data => setAbout(data))
  }, [projectsData, fetchAllProjects]);

  if (!projectsData || !aboutData) {
    return <Loading>Loading...</Loading>
  }

  return (
    <>
      <Header />
      <GalleryProject data={projectsData} />
      <Container>
        <About className="about-section">
          { aboutData ? (
            <BlocContent
              rowReverse={true}
              title={aboutData.title}
              text={aboutData.text}
              image={aboutData.image.url}
            />
          ) : (
            <p>No data available for contact section. Please go to http://localhost:1337/admin and fill in data.</p>
          )}
        </About>
        <ContactSection />
      </Container>
    </>
  )
};

export default Home;
