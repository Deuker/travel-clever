import React, {useState, setState, Component} from 'react'; 
import { Form, Button } from 'react-bootstrap';
import WelcomePage from './WelcomePage';
import Dashboard from './Dashboard';
import axios from 'axios';

class ProfilePage extends Component {
  //state here for saving the information and sending it to the Backend
 
    state = {
      startpoint: "",
      endpoint: "",
      kilometer: ""
    }


  handleSubmit = (event) => {
    event.preventDefault()
    const data = this.state
    console.log("Final data is: ",data);
    //axios request goes here
    axios.post('/api/')
  }

  handleChange = (event) => {
    //event.preventDefault()
    const name = event.target.name;
    const value = event.target.value
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <div>
        <h1>This represents the Profile Page</h1>
        <WelcomePage />
        <h3>Search Route - later overwritten by Map</h3>
        <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor='startpoint'>Startpoint: </Form.Label>
              <Form.Control
                type='text'
                name='startpoint'
                value={this.state.startpoint}
                onChange={this.handleChange}
                id='startpoint'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='endpoint'>Endpoint: </Form.Label>
              <Form.Control
                type='text'
                name='endpoint'
                value={this.state.endpoint}
                onChange={this.handleChange}
                id='endpoint'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='kilometres'>Kilometer: </Form.Label>
              <Form.Control
                type='text'
                name='kilometres'
                value={this.state.kilometres}
                onChange={this.handleChange}
                id='kilometres'
              />
            </Form.Group>
          <Button type='submit'>Save</Button>
        </Form>
        <Dashboard />
      </div>
    )
  }
}

export default ProfilePage;