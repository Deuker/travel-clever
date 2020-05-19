import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';

export default class RoutesDetails extends Component {

    state = {
    route:null,
    startpoint:'',
    endpoint:'',
    kilometer: '',
    co2emission:'',
    owner:'',
    error:null
  }


  componentDidMount() {
    const routeId = this.props.match.params.id;

    return axios
      .get(`/api/routes/${routeId}`)
      .then(response => {
        const route=response.data;
        const startpoint= response.data.startpoint;
        const endpoint= response.data.endpoint;
        const kilometer=response.data.kilometer;
        console.log(kilometer);
        const co2emission=response.data.co2emission;
        const owner=response.data.owner;
        
        this.setState({ route, startpoint, endpoint, kilometer, co2emission, owner });
      })
      .catch(err => {
        console.log(err);
      });
  }


  deleteRoute = () => {
    const id = this.props.match.params.id;
    axios.delete(`/api/routes/${id}`)
      .then(() => {
        this.props.getData();
        this.props.history.push('/routes');
      }).catch(err => {
        console.log(err);
      })
  }

 

 
  render() {
    if (this.state.error) return <div>{this.state.error}</div>
    if (!this.state.route) return (<></>)

    let allowedToDelete = false;
    const user = this.props.user;
    if (user) allowedToDelete = true;

    return (
      <div>
        <h1>{this.state.route.startpoint} - {this.state.endpoint}</h1>
        {allowedToDelete && (
          <Button variant='danger' onClick={this.deleteRoute}>
            Delete this route
          </Button>
        )}
      </div>
    )
  }
} 
