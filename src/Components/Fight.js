import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Modal, Button } from 'semantic-ui-react';
import SoldierCard from './SoldierCard';
import { setPlayersFinalScore, setComputersFinalScore, updateUserStats } from '../actions/actions'

class Fight extends Component {
  constructor(){
    super()
    this.state = {
      computersArmy: null,
      bonusWinner: null,
      modalOpen: true
    }
  }

  handleClose = () =>{
    this.setState({ modalOpen: false })
    if (this.props.user){
      this.update()
    }
  }

  componentDidMount(){
    let compArmy = this.whichArmy(this.props.computersArmy)
    this.setState({
      computersArmy: compArmy
    })
    let bonusWin = this.whoGetsBonus(this.props.computersArmy, this.props.playersArmy)[0]
    this.setState({
      bonusWinner: bonusWin
    })
    let bonusPoints = this.whoGetsBonus(this.props.computersArmy, this.props.playersArmy)[1]
    if (bonusPoints === 1){
      this.props.finalScoreComputer(5)
    } else if (bonusPoints === 2){
      this.props.finalScorePlayer(5)
    }
  }

  render(){
    return (
      <div>
        <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
        dimmer='blurring'
        >
          <Modal.Header>
            <h1>{this.whoWins(this.props.playersScore, this.props.computersScore)[0]}</h1>
          </Modal.Header>
          <Modal.Content>
            <h2>{`The Enemy chose to deploy ${this.state.computersArmy}!`}</h2>
          </Modal.Content>
          <Modal.Content>
            <h2>{`${this.state.bonusWinner}`}</h2>
          </Modal.Content>
          <Modal.Content>
            <h2>Final Scores...</h2>
            <h3>{`You: ${this.props.playersScore}`}</h3>
            <h3>{`The Enemy: ${this.props.computersScore}`}</h3>
          </Modal.Content>
          <Modal.Actions>
            <Button color='violet' onClick={this.handleClose} inverted>
              See the Carnage
            </Button>
          </Modal.Actions>
        </Modal>

        <h2 className='game-text'>Your army...</h2>
        <Grid>
          <Grid.Row columns={10}>
            {this.props.playersHand.map(soldier =>(
              <Grid.Column key={`${soldier.points}-${soldier.id}`}>
                <SoldierCard
                  soldier={soldier}
                />
              </Grid.Column>
              ))}
          </Grid.Row>
        </Grid>

        <h2 className='game-text'>The Enemy's army...</h2>
        <Grid>
          <Grid.Row columns={10}>
            {this.props.computersHand.map(soldier =>(
              <Grid.Column key={`${soldier.points}-${soldier.id}`}>
                <SoldierCard
                  soldier={soldier}
                />
              </Grid.Column>
              ))}
          </Grid.Row>
        </Grid>

        <br></br>
        <br></br>

        <Link to='/home' ><Button size='large' color='purple'>Play Again</Button></Link>
      </div>
    )
  }

  setUserHighScore = (currentUser) =>{
    if (this.props.user && this.props.playersScore > currentUser.high_score) {
      return this.props.playersScore
    } else {
      return currentUser.score
    }
  }

  collectUserStatsForTie = (currentUser, currentUserId) =>{
    return {
      latest_stat: 'tie',
      consecutive_wins: 0,
      high_score: this.setUserHighScore(currentUser)
    }
  }

  collectUserStatsForLoser = (currentUser, currentUserId) =>{
    return {
    high_score: this.setUserHighScore(currentUser),
    latest_stat: 'loss',
    losses: currentUser.losses + 1,
    consecutive_wins: 0
    }
  }

  collectUserStatsForWinner = (currentUser) =>{
    console.log(currentUser)
    let highest_consecutive_wins;
    if (currentUser.highest_consecutive_wins > currentUser.consecutive_wins + 1) {
      highest_consecutive_wins = currentUser.highest_consecutive_wins
    } else {
      highest_consecutive_wins = currentUser.consecutive_wins + 1
    }
    let updated_user_info = {
      high_score: this.setUserHighScore(currentUser),
      latest_stat: 'win',
      wins: currentUser.wins + 1,
      consecutive_wins: currentUser.consecutive_wins + 1,
      highest_consecutive_wins: highest_consecutive_wins
    }
    console.log('updated info...', updated_user_info)
    return updated_user_info
  }

  update = () =>{
    let id = this.props.user.id
    if (this.whoWins(this.props.playersScore, this.props.computersScore)[1] === 'tie') {
      let updatedStats = this.collectUserStatsForTie(this.props.user)
      this.props.updateUser(updatedStats, id)
    } else if (this.whoWins(this.props.playersScore, this.props.computersScore)[1] === 'win') {
      let updatedStats = this.collectUserStatsForWinner(this.props.user)
      this.props.updateUser(updatedStats, id)
    } else if (this.whoWins(this.props.playersScore, this.props.computersScore)[1] === 'loss') {
      let updatedStats = this.collectUserStatsForLoser(this.props.user)
      this.props.updateUser(updatedStats, id)
    }
  }

  whichArmy = (armyId) =>{
    if (armyId === 1){
      return 'rock'
    } else if (armyId === 2){
      return 'paper'
    } else {
      return 'scissors'
    }
  }

  whoGetsBonus = (computersArmy, playersArmy) =>{
    if (computersArmy === playersArmy){
      return ["No bonus points awarded this time.", 0]
    } else if (computersArmy === 1 && playersArmy === 2){
      return ["Good decision, General! Paper covers rock - you get 5 bonus points!", 2]
    } else if (computersArmy === 1 && playersArmy === 3){
      return ["Sorry, General! Rock crushes scissors - The Enemy gets 5 bonus points!", 1]
    } else if (computersArmy === 2 && playersArmy === 1){
      return ["Sorry, General! Paper covers rock - The Enemy gets 5 bonus points!", 1]
    } else if (computersArmy === 2 && playersArmy === 3){
      return ["Good decision, General! Scissors cut paper - you get 5 bonus points!", 2]
    } else if (computersArmy === 3 && playersArmy === 1){
      return ["Good decision, General! Rock crushes scissors - you get 5 bonus points!", 2]
    } else if (computersArmy === 3 && playersArmy === 2){
      return ["Sorry, General! Scissors cut paper - The Enemy gets 5 bonus points!", 1]
    }
  }

  whoWins = (playersScore, computersScore) =>{
    if (this.props.playersScore === this.props.computersScore) {
      return ["It's a tie!", 'tie']
    } else if (this.props.playersScore > this.props.computersScore) {
      return ["You win General!", 'win']
    } else {
      return ["The Enemy has won this battle.", 'loss']
    }
  }
}

const mapStateToProps = (state) =>{
  return { computersArmy: state.computersArmy,
  playersArmy: state.playersArmy,
  playersHand: state.playersHand,
  computersHand: state.computersHand,
  playersScore: state.playersScore,
  computersScore: state.computersScore,
  user: state.currentUser
 }
}

export default connect(mapStateToProps, {
  finalScorePlayer: setPlayersFinalScore,
  finalScoreComputer: setComputersFinalScore,
  updateUser: updateUserStats
})(Fight);
