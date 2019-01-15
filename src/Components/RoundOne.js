import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Grid } from 'semantic-ui-react';
import { roundOneComputerDeal, roundOnePlayerDeal, addSoldierToPlayersHand, removeSoldierFromPlayersFirstDeal, computerSelectsSoldiers } from '../actions/actions';
import SoldierCard from './SoldierCard';

class RoundOne extends Component {
  render(){
    return (
      <div>
        <h1>Enlistment Phase!</h1>

        <Button size='large' color='olive' onClick={() =>{ this.shuffleSoldiers(this.props.soldiers)}}>
        Deal Me Some Soldiers
        </Button>

        <Grid>
          <Grid.Row columns={7}>
            {this.props.roundOnePlayerDeal.map(soldier =>(
              <Grid.Column key={soldier.id}>
                <SoldierCard
                  soldier={soldier}
                  playerAddSoldier={this.props.playerAddSoldier}
                  playerRemoveSoldier={this.props.playerRemoveSoldier}
                   />
              </Grid.Column>
              ))}
          </Grid.Row>
        </Grid>

        <h2>Click on 5 soldiers to add them to your hand.</h2>
        <h2>Your hand...</h2>
          <Grid>
            <Grid.Row columns={5}>
              {this.props.playersHand.map(soldier =>(
                <Grid.Column key={soldier.id}>
                  <SoldierCard
                    soldier={soldier} />
                </Grid.Column>
                ))}
            </Grid.Row>
          </Grid>

          <Link to="/round_two"><Button size='large' color='olive' onClick={() =>{
            this.props.computerSelection(this.props.roundOneComputerDeal)
          }}>
          Done!
          </Button></Link>
      </div>
    )
  }

  shuffleSoldiers = (soldiers) =>{
    let count = soldiers.length;
    let t;
    let i;
    while (count){
      i = Math.floor(Math.random() * count--);
      t = soldiers[count];
      soldiers[count] = soldiers[i];
      soldiers[i] = t;
    }
    this.props.roundOneDealToPlayer(soldiers)
    this.props.roundOneDealToComputer(soldiers)
  }
}

const mapStateToProps = (state) =>{
  return { soldiers: state.soldiers,
  roundOnePlayerDeal: state.roundOnePlayerDeal,
  playersHand: state.playersHand,
  roundOneComputerDeal: state.roundOneComputerDeal,
  computersHand: state.computersHand }
}

export default connect(mapStateToProps, { roundOneDealToComputer: roundOneComputerDeal,
roundOneDealToPlayer: roundOnePlayerDeal, playerAddSoldier: addSoldierToPlayersHand, playerRemoveSoldier: removeSoldierFromPlayersFirstDeal,
computerSelection: computerSelectsSoldiers
})(RoundOne);
