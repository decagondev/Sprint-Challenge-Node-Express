import React from "react";
import "./index.css";

const ActionForm = props => {
  const heading = props.type === "new" ? "Create New Action:" : "Edit Action:";
  const buttonName = props.type === "new" ? "Save" : "Update";

  return (
    <div className="main-container form">
      <h2>{heading}</h2>
      <form>
        <input
          type="text"
          name="title"
          maxLength="20"
          placeholder="Action Title"
          value={props.title}
          onChange={props.handleInputChange}
        />
        <textarea
          type="text"
          name="contents"
          placeholder="Action Content"
          value={props.contents}
          onChange={props.handleInputChange}
        />
        <button onClick={props.handleFormSubmit}>{buttonName}</button>
      </form>
    </div>
  );
};

export default ActionForm;
