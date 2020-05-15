
import React from 'react';
import MapView from "./components/MapView"
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Routes from './components/Routes';
//import RouteDetails from './components/RouteDetails'




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
    return (
      <div className='App' >
      
      
    
      
       <Navbar user={this.state.user} setUser={this.setUser} />

<Switch>
       <ProtectedRoute
 
  // this is an additional prop that is taken care of with ...rest
  exact path='/'
  user={this.state.user}
  component={MapView}
/>

<ProtectedRoute
exact path='/routes'
 user={this.state.user}
  component={Routes}

/>

{/*<Route
  exact path='/routes/:id'
  component={RouteDetails}
/>
*/}


       
    
       <Route
          exact path='/signup'
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
       <Route
          exact
          path='/login'
          render={(props) => <Login setUser={this.setUser} {...props}/>}
        />
     </Switch>
      </div>
    );
  }

}

export default App;
