import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Radio, Grid, Button } from 'semantic-ui-react';
import SoldierCard from './SoldierCard';
import { playerDeployArmy, computerDeployArmy, setPlayersScore, setPlayersArmy, setComputersScore, setComputersArmy } from '../actions/actions'

class FinalRound extends Component {
  state = {}

  handleChange = (e, { value }) =>{
    this.setState({ value })
    this.props.playerSelectArmy(e.currentTarget.firstElementChild.value)
    this.props.playerSetArmy(Number(e.currentTarget.firstElementChild.id))
    this.tallyPlayersScore(this.props.playersHand)
    let computersArmy = this.tallyComputersScores(this.props.computersHand)[0]
    let computersScore = this.tallyComputersScores(this.props.computersHand)[1]
    console.log(e.currentTarget.firstElementChild.id)
    this.props.computerSelectArmy(computersArmy)
    this.props.computerSetScore(computersScore)
    this.props.computerSetArmy(computersArmy)
  }

  render(){
    return (
      <div>
        <h1>Preparing for the final showdown...</h1>

        <h2>Your hand...</h2>

        <Grid>
          <Grid.Row columns={5}>
            {this.props.playersHand.slice (0, 5).map(soldier =>(
              <Grid.Column key={`${soldier.points}-${soldier.id}`}>
                <SoldierCard
                  soldier={soldier} />
                </Grid.Column>
                ))}
          </Grid.Row>
          <Grid.Row columns={5}>
            {this.props.playersHand.slice(5).map(soldier =>(
              <Grid.Column key={`${soldier.points}-${soldier.id}`}>
                <SoldierCard
                  soldier={soldier} />
              </Grid.Column>
              ))}
          </Grid.Row>
        </Grid>

        <Form>
          <Form.Field>
            Which army would you like to deploy? <b>{this.state.value}</b>
          </Form.Field>
          <Form.Field>
            <Radio
              id='1'
              label='Rock'
              name='radioGroup'
              value='Rock'
              checked={this.state.value === 'Rock'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              id='2'
              label='Paper'
              name='radioGroup'
              value='Paper'
              checked={this.state.value === 'Paper'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              id='3'
              label='Scissors'
              name='radioGroup'
              value='Scissors'
              checked={this.state.value === 'Scissors'}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>

        <h2>Computer is deciding which army to deploy...</h2>

        <Link to='/fight'><Button size='large' color='olive' onClick={() => {
          this.props.playerSetScore(this.tallyPlayersScore(this.props.playersHand))
        }}>Fight!</Button></Link>
      </div>
    )
  }

  tallyPlayersScore = (playersHand) =>{
    let soldiers = playersHand.filter(card => card.points === 2)
    let upgrades = playersHand.filter(card => card.points === 3)
    let soldiersCount = soldiers.length
    let upgradesCount;
    let score = soldiersCount * 2
    if (upgrades.length > soldiersCount) {
      upgradesCount = soldiersCount
    } else {
      upgradesCount = upgrades.length
    }
    score = score + (upgradesCount * 3)
    return score
  }

  tallyComputersScores = (computersHand) =>{
    let rockSoldiers = computersHand.filter(card => card.points === 2 && card.soldier_type_id === 1)
    let rockUpgrades = computersHand.filter(card => card.points === 3 && card.soldier_type_id === 1)
    let paperSoldiers = computersHand.filter(card => card.points === 2 && card.soldier_type_id === 2)
    let paperUpgrades = computersHand.filter(card => card.points === 3 && card.soldier_type_id === 2)
    let scissorsSoldiers = computersHand.filter(card => card.points === 2 && card.soldier_type_id === 3)
    let scissorsUpgrades = computersHand.filter(card => card.points === 3 && card.soldier_type_id === 3)
    //Rock Army Score
    let rockSoldiersCount = rockSoldiers.length
    let rockUpgradesCount;
    let rockScore = rockSoldiersCount * 2
    if (rockUpgrades.length > rockSoldiersCount) {
      rockUpgradesCount = rockSoldiersCount
    } else {
      rockUpgradesCount = rockUpgrades.length
    }
    rockScore = rockScore + (rockUpgradesCount * 3)
    console.log('rock', rockScore)
    //Paper Army Score
    let paperSoldiersCount = paperSoldiers.length
    let paperUpgradesCount;
    let paperScore = paperSoldiersCount * 2
    if (paperUpgrades.length > paperSoldiersCount) {
      paperUpgradesCount = paperSoldiersCount
    } else {
      paperUpgradesCount = paperUpgrades.length
    }
    paperScore = paperScore + (paperUpgradesCount * 3)
    console.log('paper', paperScore)
    //Scissors Army Score
    let scissorsSoldiersCount = scissorsSoldiers.length
    let scissorsUpgradesCount;
    let scissorsScore = scissorsSoldiersCount * 2
    if (scissorsUpgrades.length > scissorsSoldiersCount) {
      scissorsUpgradesCount = scissorsSoldiersCount
    } else {
      scissorsUpgradesCount = scissorsUpgrades.length
    }
    scissorsScore = scissorsScore + (scissorsUpgradesCount * 3)
    console.log('scissors', scissorsScore)
    if (rockScore >= paperScore && rockScore >= scissorsScore){
      return [1, rockScore]
    } else if (paperScore >= rockScore && paperScore >= scissorsScore){
      return [2, paperScore]
    } else {
      return [3, scissorsScore]
    }
  }
}

const mapStateToProps = (state) =>{
  return {
    playersHand: state.playersHand,
    computersHand: state.computersHand,
    playersScore: state.playersScore,
    computersScore: state.computersScore
  }
}

export default connect(mapStateToProps, {
  playerSelectArmy: playerDeployArmy,
  computerSelectArmy: computerDeployArmy,
  playerSetScore: setPlayersScore,
  playerSetArmy: setPlayersArmy,
  computerSetScore: setComputersScore,
  computerSetArmy: setComputersArmy
})(FinalRound);
