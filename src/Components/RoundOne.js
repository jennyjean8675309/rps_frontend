import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Grid } from 'semantic-ui-react';
import { roundOneComputerDeal, roundOnePlayerDeal, shuffleSoldiers } from '../actions/actions';
import SoldierCard from './SoldierCard'

class RoundOne extends Component{
  render(){
    return (
      <div>
        <h1>Enlistment Phase!</h1>

        <Button size='large' color='olive' onClick={() =>{ this.props.shufflingSoldiers(this.props.soldiers)
        this.props.roundOneDealToPlayer(this.props.soldiers)
        this.props.roundOneDealToComputer(this.props.soldiers)
        }}>
        Deal Me Some Soldiers
        </Button>

        <h2>Your hand...</h2>

        <Grid>
          <Grid.Row columns={7}>
            {this.props.playersHand.map(soldier =>(
              <Grid.Column>
                <SoldierCard soldier={soldier}/>
              </Grid.Column>
              ))}
          </Grid.Row>
        </Grid>        
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return { soldiers: state.soldiers,
  playersHand: state.playersHand,
  computersHand: state.computersHand }
}

export default connect(mapStateToProps, { roundOneDealToComputer: roundOneComputerDeal,
roundOneDealToPlayer: roundOnePlayerDeal,
shufflingSoldiers: shuffleSoldiers })(RoundOne);
