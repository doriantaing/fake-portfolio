import React, { useContext, useEffect } from "react";
import { Header } from "components/molecules/Header/Header";
import ProjectContext from "contexts/project.context";
import { useLocation } from "react-router-dom";
import BlocContent from "../organisms/BlocContent/BlocContent";
import { Container } from "../layouts/container";
import ProjectBloc from "../layouts/project-bloc";
import ProjectBody from "../layouts/project-body";
import Loading from "../layouts/loading";

const Project = () => {
  const { projectsData, fetchAllProjects } = useContext(ProjectContext);
  const location = useLocation();
  const projectID = location.pathname.replace('/project/', '');

  useEffect(() => {
    !projectsData && fetchAllProjects();
  });

  if (!projectsData) {
    return <Loading>Loading...</Loading>
  }

  return (
    <>
      <Header />
      <Container>
        { projectsData[projectID].project_section.length === 0 && (
          <p>No data for this project</p>
        )}
        <ProjectBody>
          { projectsData[projectID].project_section.map((item, i)=> (
            <ProjectBloc>
              <BlocContent
                rowReverse={item.rowReverse}
                title={item.title}
                text={item.text}
                image={item.img.url}
                key={i}
              />
            </ProjectBloc>
          ))}
        </ProjectBody>
      </Container>
    </>
  )
};

export default Project;
