import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Transition, Image, Grid } from 'semantic-ui-react';

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
        <h1 className='home-header'>Welcome to Rock, Paper, Scissors - FIGHT!</h1>

        <br></br>
        <br></br>

        <Grid>
          <Grid.Row columns={3}>
            <Transition.Group animation='fly left' duration={1000}>
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

        <Link to='/round_one'><Button size='massive' color='olive' className='home-button'>Play the Game!</Button></Link>
      </div>
    )
  }
}

export default Home
