import React from "react";
import "./index.css";

const ProjectForm = props => {
  const heading =
    props.type === "new" ? "Create New Project:" : "Edit Project:";
  const buttonName = props.type === "new" ? "Save" : "Update";

  return (
    <div className="main-container form">
      <h2>{heading}</h2>
      <form>
        <input
          type="text"
          name="project"
          maxLength="20"
          placeholder="Project Name"
          value={props.title}
          onChange={props.handleInputChange}
        />
        <button onClick={props.handleFormSubmit}>{buttonName}</button>
      </form>
    </div>
  );
};

export default ProjectForm;
