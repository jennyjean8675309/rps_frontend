import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import HowToPlay from './Components/HowToPlay';
import RoundOne from './Components/RoundOne';
import RoundTwo from './Components/RoundTwo';
import FinalRound from './Components/FinalRound';
import Fight from './Components/Fight';
import { connect } from 'react-redux';
import { fetchingToken, fetchingSoldiers, fetchingSoldierUpgrades, fetchingUsers } from './actions/actions';

class App extends Component {

  componentDidMount(){
    this.props.fetchToken()
    this.props.fetchSoldiers()
    this.props.fetchSoldierUpgrades()
    this.props.fetchUsers()
  }

  render() {
    return (
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path='/fight' component={Fight} />

          <Route exact path='/final_round' component={FinalRound} />

          <Route exact path='/round_two' component={RoundTwo} />

          <Route exact path='/round_one' component={RoundOne} />

          <Route exact path='/how_to_play' component={HowToPlay} />

          <Route exact path='' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null, {
  fetchToken: fetchingToken,
  fetchSoldiers: fetchingSoldiers,
  fetchSoldierUpgrades: fetchingSoldierUpgrades,
  fetchUsers: fetchingUsers
})(App));
