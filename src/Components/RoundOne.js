import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Grid } from 'semantic-ui-react';
import { roundOneComputerDeal, roundOnePlayerDeal, addSoldierToPlayersHand, removeSoldierFromPlayersFirstDeal, computerSelectsSoldiers } from '../actions/actions';
import SoldierCard from './SoldierCard';

class RoundOne extends Component {
  constructor(){
    super()
    this.state = {
      cardsDealt: false
    }
  }

  render(){
    return (
      <div>
        <h1>Enlistment Phase!</h1>

        <Button size='large' color='olive' onClick={() =>{
          if (this.state.cardsDealt === false) {
          this.shuffleSoldiers(this.props.soldiers)
          this.setState({
            cardsDealt: true
          })}}} >
        Deal Me Some Soldiers
        </Button>

        <br></br>
        <br></br>

        { this.state.cardsDealt === true ?
          <div>
            <Grid>
              <Grid.Row columns={7}>
                {this.props.roundOnePlayerDeal.map(soldier =>(
                  <Grid.Column key={`${soldier.points}-${soldier.id}`} >
                    <div onClick={() =>{
                    this.props.playerAddSoldier(soldier)
                    this.props.playerRemoveSoldier(soldier)
                    }} >
                      <SoldierCard
                      soldier={soldier} />
                  </div>
                  </Grid.Column>
                  ))}
              </Grid.Row>
            </Grid>

            <h2>Click on 5 soldiers to add them to an army.</h2>
          </div> : null }

          { this.props.playersHand.length > 0 ?
            <div>
              <br></br>
              <br></br>
              
              <h2>Your armies...</h2>
                <Grid>
                  <Grid.Row columns={5}>
                    {this.props.playersHand.map(soldier =>(
                      <Grid.Column key={`${soldier.points}-${soldier.id}`}>
                        <SoldierCard
                        soldier={soldier} />
                      </Grid.Column>
                      ))}
                  </Grid.Row>
                </Grid>

                <Link to={`${this.redirectUser()}`}><Button size='large' color='olive' onClick={() =>{
                  if (this.props.playersHand.length !== 5) {
                    alert('You must choose 5 cards before moving on to the next round.')
                  } else {
                  this.props.computerSelection(this.props.roundOneComputerDeal)
                  this.redirectUser()
                  }
                }}>
                Done!
              </Button></Link>
            </div>
            : null }

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

  redirectUser = () =>{
    if (this.props.playersHand.length < 5) {
      return '/round_one'
    } else {
      return '/round_two'
    }
  }
}

const mapStateToProps = (state) =>{
  return { soldiers: state.soldiers,
  roundOnePlayerDeal: state.roundOnePlayerDeal,
  playersHand: state.playersHand,
  roundOneComputerDeal: state.roundOneComputerDeal,
  computersHand: state.computersHand }
}

export default connect(mapStateToProps, {
  roundOneDealToComputer: roundOneComputerDeal,
  roundOneDealToPlayer: roundOnePlayerDeal,
  playerAddSoldier: addSoldierToPlayersHand,
  playerRemoveSoldier: removeSoldierFromPlayersFirstDeal,
  computerSelection: computerSelectsSoldiers
})(RoundOne);
