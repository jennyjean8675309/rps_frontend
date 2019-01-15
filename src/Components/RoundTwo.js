import React, {Component } from 'react';
import { connect } from 'react-redux';
import { Button, Grid } from 'semantic-ui-react';
import { reduceSoldierDeckAfterRound, combineSoldierAndUpgradeDeck, roundTwoComputerDeal } from '../actions/actions';

class RoundTwo extends Component {
  componentDidMount(){
    this.props.reduceSoldierDeck(this.props.playersHand, this.props.computersHand)
  }

  // componentDidUpdate(){
  //   this.dealCards(this.props.soldierAndUpgradeDeck)
  // }
  //Can't use componentDidUpdate() - maybe an in-between call with thunk middleware???
  //I want to deal the cards on button click, but instead, I'm calling .combineDecks, which adds the soldiers
  //to the upgrades and shuffles them

  dealCards = (combinedDeck) =>{
    this.props.secondComputerDeal(combinedDeck)
  }

  render(){
    return (
      <div>
        <h1>Training Phase!</h1>

        <Button size='large' color='olive' onClick={() =>{
        this.props.combineDecks(this.props.soldiers, this.props.upgrades)
        }}>
        Deal Me Some Soldier Upgrades
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return { soldiers: state.soldiers,
  playersHand: state.playersHand,
  computersHand: state.computersHand,
  upgrades: state.soldierUpgrades,
  soldierAndUpgradeDeck: state.soldierAndUpgradeDeck,
  computerDealRoundTwo: state.roundTwoComputerDeal
  }
}

export default connect(mapStateToProps, {
  reduceSoldierDeck: reduceSoldierDeckAfterRound,
  combineDecks: combineSoldierAndUpgradeDeck,
  secondComputerDeal: roundTwoComputerDeal
})(RoundTwo)
