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
      bonusWinner: null
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
        <h1>Fight!</h1>

        <h2>{`Oh snap! Computer chose to deploy ${this.state.computersArmy}!`}</h2>

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
      return ["No bonus points awarded.", 0]
    } else if (computersArmy === 1 && playersArmy === 2){
      return ["Paper covers rock - you get 5 bonus points!", 2]
    } else if (computersArmy === 1 && playersArmy === 3){
      return ["Rock crushes scissors - computer gets 5 bonus points!", 1]
    } else if (computersArmy === 2 && playersArmy === 1){
      return ["Paper covers rock - computer gets 5 bonus points!", 1]
    } else if (computersArmy === 2 && playersArmy === 3){
      return ["Scissors cut paper - you get 5 bonus points!", 2]
    } else if (computersArmy === 3 && playersArmy === 1){
      return ["Rock crushes scissors - you get 5 bonus points!", 2]
    } else if (computersArmy === 3 && playersArmy === 2){
      return ["Scissors cut paper - computer gets 5 bonus points!", 1]
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
