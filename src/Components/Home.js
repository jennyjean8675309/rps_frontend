import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Transition, Image } from 'semantic-ui-react';

class Home extends Component {
  state = { rockVisible: false, paperVisible: false, scissorsVisible: false }

  componentDidMount(){
    this.setState({ rockVisible: true })
    setTimeout(() => {this.setState({ paperVisible: true })}, 500)
    setTimeout(() => {this.setState({ scissorsVisible: true })}, 1000)
  }

  render(){
    return (
      <div>
        <h1>Welcome to Rock, Paper, Scissors - FIGHT!</h1>

        <Transition.Group animation='fly left' duration={1000}>
          {this.state.rockVisible && <Image src={require('../images/rock.jpeg')} />}
          {this.state.paperVisible && <Image src={require('../images/paper.jpeg')} />}
          {this.state.scissorsVisible && <Image src={require('../images/scissors.jpeg')} />}
        </Transition.Group>

        <Link to='/round_one'><Button size='massive' color='olive'>Play the Game!</Button></Link>
      </div>
    )
  }
}

export default Home
