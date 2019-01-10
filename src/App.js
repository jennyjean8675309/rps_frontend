import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import HowToPlay from './Components/HowToPlay'
import SignIn from './Components/SignIn'
import RoundOne from './Components/RoundOne'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path='/round_one' render={() => <RoundOne />} />

          <Route exact path='/sign_in' component={SignIn} />

          <Route exact path='/how_to_play' component={HowToPlay} />

          <Route exact path='' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
