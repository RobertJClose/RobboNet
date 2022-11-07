import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledProjects = styled.ul`
  display: grid;
  grid-gap: 1rem;
  list-style: none;
  @media screen and (min-width: 790px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProjectGallery = ({ projectsData }) => {
  return (
    <div>
      <StyledProjects>
        {projectsData.map((project) => (
          <article key={project.id}>
            <h2>
              <Link to={"/projects/" + project.slug}>{project.title}</Link>
            </h2>
            <p>{project.description}</p>
          </article>
        ))}
      </StyledProjects>
    </div>
  );
};
