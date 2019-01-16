import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Radio, Grid, Button } from 'semantic-ui-react';
import SoldierCard from './SoldierCard';
import { playerDeployArmy, computerDeployArmy } from '../actions/actions'
class FinalRound extends Component {
  state = {
    playersScore: 0
  }

  handleChange = (e, { value }) =>{
    this.setState({ value })
    this.props.playerSelectArmy(e.currentTarget.firstElementChild.value)
    this.tallyPlayersScore(this.props.playersHand)
    this.props.computerSelectArmy(this.tallyComputersScores(this.props.computersHand))
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
              label='Rock'
              name='radioGroup'
              value='Rock'
              checked={this.state.value === 'Rock'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Paper'
              name='radioGroup'
              value='Paper'
              checked={this.state.value === 'Paper'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Scissors'
              name='radioGroup'
              value='Scissors'
              checked={this.state.value === 'Scissors'}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>

        <h2>{`Your current score is ${this.tallyPlayersScore(this.props.playersHand)}`}</h2>

        <h2>Computer is deciding which army to deploy...</h2>

        <Button size='large' color='olive'>Fight!</Button>
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
    return score + (upgradesCount * 3)
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
      return 1
    } else if (paperScore >= rockScore && paperScore >= scissorsScore){
      return 2
    } else {
      return 3
    }
  }
}

const mapStateToProps = (state) =>{
  return {
    playersHand: state.playersHand,
    computersHand: state.computersHand
  }
}

export default connect(mapStateToProps, {
  playerSelectArmy: playerDeployArmy,
  computerSelectArmy: computerDeployArmy
})(FinalRound);
