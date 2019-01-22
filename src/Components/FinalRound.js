import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Radio, Grid, Button } from 'semantic-ui-react';
import SoldierCard from './SoldierCard';
import { playerDeployArmy, computerDeployArmy, setPlayersScore, setPlayersArmy, setComputersScore, setComputersArmy } from '../actions/actions'

class FinalRound extends Component {
  state = {
    filteredArmy: [],
    armyId: null
  }

  handleChange = (e, { value }) =>{
    this.setState({ value })
    this.setState({
      armyId: Number(e.currentTarget.firstElementChild.id)
    })
    this.filterArmy(e.currentTarget.firstElementChild.id)
    let computersArmy = this.tallyComputersScores(this.props.computersHand)[0]
    let computersScore = this.tallyComputersScores(this.props.computersHand)[1]
    this.props.computerSelectArmy(computersArmy)
    this.props.computerSetScore(computersScore)
    this.props.computerSetArmy(computersArmy)
  }

  render(){
    return (
      <div>
        <Form>
          <Form.Field>
            <h1>Which army would you like to deploy, General? </h1>
            <b>{this.state.value}</b>
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

        <h2>Your army...</h2>

        <Grid>
          <Grid.Row columns={5}>
            {this.state.filteredArmy.slice (0, 5).map(soldier =>(
              <Grid.Column key={`${soldier.points}-${soldier.id}`}>
                <SoldierCard
                  soldier={soldier} />
                </Grid.Column>
                ))}
          </Grid.Row>
          <Grid.Row columns={5}>
            {this.state.filteredArmy.slice(5).map(soldier =>(
              <Grid.Column key={`${soldier.points}-${soldier.id}`}>
                <SoldierCard
                  soldier={soldier} />
              </Grid.Column>
              ))}
          </Grid.Row>
        </Grid>

        <Link to='/fight'><Button size='large' color='purple' onClick={() =>{
          let playersScore = this.tallyScore(this.state.filteredArmy)
          console.log(playersScore)
          this.props.playerSetArmy(this.state.armyId)
          this.props.playerSelectArmy(this.state.filteredArmy)
          this.props.playerSetScore(playersScore)
        }}>FIGHT!</Button></Link>
      </div>
    )
  }

  tallyScore = (playersArmy) =>{
    let soldiers = playersArmy.filter(card => card.points === 2)
    let upgrades = playersArmy.filter(card => card.points === 3)
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
    let rocks = computersHand.filter(card => card.soldier_type_id === 1)
    let rockScore = this.tallyScore(rocks)
    let papers = computersHand.filter(card => card.soldier_type_id === 2)
    let paperScore = this.tallyScore(papers)
    let scissors = computersHand.filter(card => card.soldier_type_id === 3)
    let scissorsScore = this.tallyScore(scissors)
    console.log('rock', rockScore)
    console.log('paper', paperScore)
    console.log('scissors', scissorsScore)
    if (rockScore >= paperScore && rockScore >= scissorsScore){
      return [1, rockScore]
    } else if (paperScore >= rockScore && paperScore >= scissorsScore){
      return [2, paperScore]
    } else {
      return [3, scissorsScore]
    }
  }

  filterArmy = (selectedArmy) =>{
    console.log('selected army...', selectedArmy)
    let currentArmy = this.props.playersHand
    if (selectedArmy === '1'){
      this.setState({
        filteredArmy: currentArmy.filter(card => card.soldier_type_id === 1)
      })
    } else if (selectedArmy === '2'){
      this.setState({
        filteredArmy: currentArmy.filter(card => card.soldier_type_id === 2)
      })
    } else if (selectedArmy === '3'){
      this.setState({
        filteredArmy: currentArmy.filter(card => card.soldier_type_id === 3)
      })
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
