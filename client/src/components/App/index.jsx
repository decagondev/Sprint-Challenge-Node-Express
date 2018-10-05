import React, { Component } from "react";
import axios from "axios";
import { Route, withRouter } from "react-router-dom";
import UserList from "../UserComponents/UserList";
import User from "../UserComponents/User";
import "./index.css";

class App extends Component {
  state = {
    projects: [],
    actions: []
  };

  componentDidMount() {
    this.refetchProjects();
  }

  refetchProjects = () => {
    axios
      .get(`http://localhost:9001/api/projects`)
      .then(response => {
        this.setState({ projects: response.data });
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
            render={props => <UserList projects={this.state.projects} />}
          />

          <Route
            path="/projects/:id"
            render={props => (
              <User {...props} refetchProjects={this.refetchProjects} />
            )}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
