import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import SoldierCard from './SoldierCard';
import { setPlayersFinalScore, setComputersFinalScore } from '../actions/actions'

class Fight extends Component {
  constructor(){
    super()
    this.state = {
      computersArmy: null,
      bonusWinner: null,
      winner: null
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
        <h2>{`The Enemy chose to deploy ${this.state.computersArmy}!`}</h2>

        <h2>{`${this.state.bonusWinner}`}</h2>

        <h2>Your hand...</h2>
        <Grid>
          <Grid.Row columns={10}>
            {this.props.playersHand.map(soldier =>(
              <Grid.Column key={`${soldier.points}-${soldier.id}`}>
                <SoldierCard
                  soldier={soldier}
                  playerAddSoldier={this.props.playerAddSoldier}
                  playerRemoveSoldier={this.props.playerRemoveSoldier}
                   />
              </Grid.Column>
              ))}
          </Grid.Row>
        </Grid>

        <h2>Computer's hand...</h2>
        <Grid>
          <Grid.Row columns={10}>
            {this.props.computersHand.map(soldier =>(
              <Grid.Column key={`${soldier.points}-${soldier.id}`}>
                <SoldierCard
                  soldier={soldier}
                  playerAddSoldier={this.props.playerAddSoldier}
                  playerRemoveSoldier={this.props.playerRemoveSoldier}
                   />
              </Grid.Column>
              ))}
          </Grid.Row>
        </Grid>

        <h2>Final Scores...</h2>
        <h2>{`You: ${this.props.playersScore}`}</h2>
        <h2>{`Computer: ${this.props.computersScore}`}</h2>
      </div>
    )
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
      return "It's a tie!"
    } else if (this.props.playersScore > this.props.computersScore) {
      return "You win General!"
    } else {
      return "The Enemy has won this battle."
    }
  }
}

const mapStateToProps = (state) =>{
  return { computersArmy: state.computersArmy,
  playersArmy: state.playersArmy,
  playersHand: state.playersHand,
  computersHand: state.computersHand,
  playersScore: state.playersScore,
  computersScore: state.computersScore
 }
}

export default connect(mapStateToProps, {
  finalScorePlayer: setPlayersFinalScore,
  finalScoreComputer: setComputersFinalScore
})(Fight);

//Player stats - record consecutive wins, total number of wins and losses?
//Modal popup for leaderboard stats
