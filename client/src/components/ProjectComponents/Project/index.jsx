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
      .get(`http://localhost:9001/api/projects/${this.id}`)
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
      .get(`http://localhost:9001/api/projects/${this.id}/actions`)
      .then(response => {
        this.setState({
          actions: response.data
        });
        console.log(this.state.actions);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const theActions = this.state.actions.slice();

    return (
      <div className="main-container project">
        <h2>
          {this.state.name}
          's <span>Actions</span>
        </h2>
        <h2>Actions</h2>
        {theActions.map(action => {
          return (
            <div>
              <h4>{action.description}</h4>
            </div>
          );
        })}
        <a className="back-lnk" href="/">
          Back
        </a>
      </div>
    );
  }
}
