import React, { Component } from "react";
import axios from "axios";
import ActionForm from "../../ActionComponents/ActionForm";
import ActionList from "../../ActionComponents/ActionList";
export default class Project extends Component {
  state = {
    isEditing: false,
    project: null,
    actions: [],
    name: ""
  };

  get id() {
    return this.props.match.params.id;
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8000/api/projects/${this.id}`)
      .then(response => {
        this.setState({
          project: response.data,
          name: response.data.name
        });
      })
      .then(response => {
        this.getActions();
      })
      .catch(error => console.log(error));
  }

  getActions = () => {
    axios
      .get(`http://localhost:8000/api/projects/${this.id}/actions`)
      .then(response => {
        this.setState({
          actions: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    if (!this.state.project) {
      return (
        <div className="main-container Project">Project is loading...</div>
      );
    }

    return (
      <div className="main-container project">
        <h2>
          {this.state.name}
          's <span>Actions</span>
        </h2>
        <ActionList actions={this.state.actions} />

        <a className="back-lnk" href="/">
          Back
        </a>
      </div>
    );
  }
}
