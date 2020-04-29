import React from "react";
import Title from "./Title";

export default {
  title: `Atoms|Title`,
  component: Title
};

export const H1 = () => <Title type="h1" testId="h1-title">Title/H1</Title>;

export const H2 = () => <Title type="h2" testId="h2-title">Title/H2</Title>;

export const H3 = () => <Title type="h3" testId="h3-title">Title/H3</Title>;

export const ProjectTitle = () => <Title type="projectTitle" testId="project-title">01/Project Title</Title>;
