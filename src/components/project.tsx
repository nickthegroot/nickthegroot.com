import React, { FC } from "react";
import ATVParallax from "react-atv-parallax";
import {
  ProjectContainer,
  ProjectSubtitle,
  ProjectTitle,
} from "../styles/App.styles";

export interface ProjectInfo {
  title: string;
  subtitle: string;
  image: string;
  url: string;
}

interface ProjectProps {
  project: ProjectInfo;
}

const Project: FC<ProjectProps> = ({ project }) => (
  <div style={{ padding: 10 }}>
    <a href={project.url}>
      <ATVParallax style={{ width: 280, height: 520 }}>
        <img
          src={project.image}
          alt="Project Icon"
          style={{ width: 280, height: 520, objectFit: "cover" }}
        />
        <ProjectContainer>
          <div
            style={{
              paddingTop: "50%",
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.9))",
            }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
          </div>
        </ProjectContainer>
      </ATVParallax>
    </a>
  </div>
);

export default Project;
