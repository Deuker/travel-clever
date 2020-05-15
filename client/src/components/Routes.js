import React, { Component } from 'react'
import axios from 'axios';
import RoutesList from './RoutesList';


export default class Routes extends Component {

  state = {
    routes: []
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    axios
      .get('/api/routes')
      .then(response => {
        console.log(response);
        this.setState({
          routes: response.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="routes-container">
        <RoutesList projects={this.state.routes} />
      </div>
    )
  }
}
