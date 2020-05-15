/*import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
//import EditProject from './EditProject';
import axios from 'axios';

export default class RoutesDetails extends Component {

  state = {

  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios.put(`/api/routes/${id}`, {
      title: this.state.title,
      description: this.state.description
    })
      .then(response => {
        this.setState({
          project: response.data,
          title: response.data.title,
          description: response.data.description,
          editForm: false
        })
      }).catch(err => {
        console.log(err);
      })
  }

  getData = () => {
    const id = this.props.match.params.id;
    console.log(id);
    axios.get(`/api/routes/${id}`)
      .then(response => {
        this.setState({
          route: response.data,
          title: response.data.title,
          description: response.data.description
        });
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({ error: 'Not found' })
        }
      })
  }

  deleteRoute = () => {
    const id = this.props.match.params.id;
    axios.delete(`/api/routes/${id}`)
      .then(() => {
        this.props.history.push('/routes');
      }).catch(err => {
        console.log(err);
      })
  }

  toggleEditForm = () => {
    this.setState({
      editForm: !this.state.editForm
    });
  }

  componentDidMount = () => {
    this.getData();
  }

  render() {
    if (this.state.error) return <div>{this.state.error}</div>
    if (!this.state.route) return (<></>)

    let allowedToDelete = false;
    const user = this.props.user;
    if (user) allowedToDelete = true;

    return (
      <div>
        <h1>{this.state.route.title}</h1>
        <p>{this.state.route.description}</p>
        {allowedToDelete && (
          <Button variant='danger' onClick={this.deleteProject}>
            Delete this project
          </Button>
        )}
        <Button onClick={this.toggleEditForm}>Show edit form</Button>
        {this.state.editForm && (
          <EditProject
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    )
  }
} */
