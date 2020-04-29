import React, { useEffect, useState } from "react";
import GalleryProject from "components/organisms/GalleryProject/GalleryProject";
import { getProjects } from "utils/http";

const Home = () => {
  const [projectsData, setProjects] = useState(null);

  useEffect(() => {
    const allProjects = async() => await getProjects();
    allProjects().then(data => setProjects(data))
  }, []);

  return (
    <div>
      { !projectsData ? (
        <p>Loading...</p>
      ) : (
        <>
          <GalleryProject data={projectsData} />
        </>
      )}
    </div>
  )
};

export default Home;
