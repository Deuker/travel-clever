
import React from 'react';
// import MapView from "./MapView"
import './App.css';
import { Route } from 'react-router-dom';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Login from './components/Login';
import WelcomePage from './components/WelcomePage';
import ProfilePage from './components/ProfilePage';

class App extends React.Component {

  state = {
    user: this.props.user
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
    console.log("this.props.user", this.props.user);
    return (
      <div className='App' >
      
      
      {/* <MapView /> */}
      
       <Navbar user={this.state.user} setUser={this.setUser} />
     
        <Route
          exact path='/signup'
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact path='/login'
          render={(props) => <Login setUser={this.setUser} {...props}/>}
        />
        <Route 
        // add protection of routes here
          exact path='/dashboard' component={ProfilePage}
        />
      </div>
    );
  }

}

export default App;
