import React from "react";
import { Link } from "react-router-dom";

const ProjectList = props => {
  if (!props.projects) {
    return <div>Projects are loading...</div>;
  }
  // if the projects do exist then we can slice them and reverse them so that newest project is shown first
  const projects = props.projects.slice().reverse();

  return (
    <div className="main-container">
      <div className="project-previews-container">
        {projects.map(project => {
          return (
            <Link to={`/projects/${project.id}`} key={Math.random()}>
              <div className="project-preview-container">
                <h3>{project.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;
