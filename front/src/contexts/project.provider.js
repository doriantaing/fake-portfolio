import React, { useState } from "react";
import ProjectContext from "./project.context";
import { getProjects } from "utils/http";

const ProjectProvider = ({ children }) => {
  const [projectsData, setProjects] = useState(null);

  const fetchAllProjects = async() => {
    const projects = await getProjects();

    setProjects(projects);
  };

  return (
    <ProjectContext.Provider value={{
      projectsData,
      fetchAllProjects
    }}>
      { children }
    </ProjectContext.Provider>
  )
};

export default ProjectProvider;
