import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import HowToPlay from './Components/HowToPlay';
import SignIn from './Components/SignIn';
import RoundOne from './Components/RoundOne';
import RoundTwo from './Components/RoundTwo'
import { connect } from 'react-redux';
import { fetchingToken, fetchingSoldiers, fetchingSoldierUpgrades, fetchingUsers } from './actions/actions';

class App extends Component {

  componentDidMount(){
    //need to make fetch calls to grab soldier cards, soldier upgrade cards, users, and current token (if one exists)
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
          <Route exact path='/round_two' component={RoundTwo } />

          <Route exact path='/round_one' component={RoundOne} />

          <Route exact path='/sign_in' component={SignIn} />

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
