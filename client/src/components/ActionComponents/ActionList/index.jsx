import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const ActionList = props => {
  if (!props.actions) {
    return <div>Actions are loading...</div>;
  }
  // if the actions do exist then we can slice them and reverse them so that newest action is shown first
  const actions = props.actions.slice().reverse();

  return (
    <div className="main-container">
      <h2>POSTS</h2>
      <div className="action-previews-container">
        {actions.map(action => {
          return (
            <Link to={`/actions/${action.id}`} key={Math.random()}>
              <div className="action-preview-container">
                <h3>{action.text}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ActionList;
