 import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Transition, Image, Grid } from 'semantic-ui-react';
import { clearPlayersHand, clearPlayersDeal, clearPlayersSecondDeal, clearComputersHand, clearComputersDeal, clearComputersSecondDeal } from '../actions/actions'

class Home extends Component {
  state = {
    rockVisible: false,
    paperVisible: false,
    scissorsVisible: false,
    fightVisible: false
  }

  componentDidMount(){
    setTimeout(() => {this.setState({ rockVisible: true })}, 500 )
    setTimeout(() => {this.setState({ paperVisible: true })}, 750)
    setTimeout(() => {this.setState({ scissorsVisible: true })}, 1000)
    setTimeout(() => {this.setState({ fightVisible: true })}, 1250)
  }

  render(){
    return (
      <div>
        <h1 className='home-header'>Welcome to Rock, Paper, Scissors...</h1>

        <br></br>
        <br></br>

        <Transition.Group animation='zoom' duration={500}>
          {this.state.fightVisible && <h1 id='fight'>FIGHT!</h1>}
        </Transition.Group>

        <Grid id="grid">
          <Grid.Row columns={3}>
            <Transition.Group animation='drop' duration={1000}>
              <Grid.Column>
                {this.state.rockVisible && <Image size='large' src={require('../images/soldier-3-1.jpg')} className="image-card" />}
              </Grid.Column>
              <Grid.Column>
                {this.state.paperVisible && <Image size='large' src={require('../images/soldier-3-2.jpg')} className="image-card" />}
              </Grid.Column>
              <Grid.Column>
                {this.state.scissorsVisible && <Image size='large' src={require('../images/soldier-3-3.jpg')} className="image-card" />}
              </Grid.Column>
            </Transition.Group>
          </Grid.Row>
        </Grid>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Link to='/round_one'><Button size='massive' color='purple' className='home-button'
          onClick={() =>{
            this.props.clearHand()
            this.props.clearDeal()
            this.props.clearSecondDeal()
            this.props.clearCompHand()
            this.props.clearCompDeal()
            this.props.clearCompSecondDeal()
          }}>Play the Game!</Button></Link>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return { playersHand: state.playersHand }
}

export default connect(mapStateToProps, {
  clearHand: clearPlayersHand,
  clearDeal: clearPlayersDeal,
  clearSecondDeal: clearPlayersSecondDeal,
  clearCompHand: clearComputersHand,
  clearCompDeal: clearComputersDeal,
  clearCompSecondDeal: clearComputersSecondDeal
})(Home)
