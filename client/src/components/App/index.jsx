import React, { Component } from "react";
import axios from "axios";
import { Route, withRouter } from "react-router-dom";
import ProjectList from "../ProjectComponents/ProjectList";
import Project from "../ProjectComponents/Project";
import Action from "../ActionComponents/Action";
import "./index.css";

class App extends Component {
  state = {
    projects: [],
    actions: []
  };

  componentDidMount() {
    this.refetchProjects();
    this.refetchActions();
  }

  refetchProjects = () => {
    axios
      .get(`http://localhost:9001/api/projects`)
      .then(response => {
        this.setState({ projects: response.data });
      })
      .catch(error => console.log(error));
  };

  refetchActions = () => {
    axios
      .get(`http://localhost:9001/api/actions`)
      .then(response => {
        this.setState({ actions: response.data });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <h1>Node Projects</h1>
        <div>
          <Route
            exact
            path="/"
            render={props => <ProjectList projects={this.state.projects} />}
          />

          <Route
            path="/projects/:id"
            render={props => (
              <div>
                <Project
                  {...props}
                  refetchProjects={this.refetchProjects}
                  refetchActions={this.refetchActions}
                  actions={this.state.actions}
                />
              </div>
            )}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
