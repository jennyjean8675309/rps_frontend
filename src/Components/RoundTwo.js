import React, {Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Grid } from 'semantic-ui-react';
import { setCombinedDeck, roundTwoComputerDeal, roundTwoPlayerDeal, addSoldierOrUpgradeToPlayersHand, removeSoldierFromPlayersSecondDeal, computerSelectsUpgrades } from '../actions/actions';
import SoldierCard from './SoldierCard';

class RoundTwo extends Component {
  constructor(){
    super()
    this.state = {
      cardsDealt: false
    }
  }

  componentDidMount(){
    this.combineDecksAndShuffle(this.props.soldiers, this.props.upgrades)
  }

  render(){
    return (
      <div>
        <h1>Training Phase!</h1>

        <h2>Click on 5 upgrade and/or soldier cards to add them to your hand.</h2>

        <Button size='large' color='olive' onClick={() =>{
            if (this.state.cardsDealt === false) {
            this.props.secondPlayerDeal(this.props.soldierAndUpgradeDeck)
            this.setState({ cardsDealt: true })
            this.props.secondComputerDeal(this.props.soldierAndUpgradeDeck)}
        }}>
        Deal Me Some Soldier Upgrades
        </Button>

        <Grid>
          <Grid.Row columns={7}>
            {this.props.roundTwoPlayerDeal.map(soldier =>(
              <Grid.Column key={`${soldier.points}-${soldier.id}`}>
                <div onClick={() => {
                  this.props.playerAddSoldierOrUpgrade(soldier)
                  this.props.playerRemoveSoldier(soldier)
                  }}>
                  <SoldierCard
                  soldier={soldier} />
                </div>
              </Grid.Column>
              ))}
          </Grid.Row>
        </Grid>

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

        <Link to='/final_round'><Button size='large' color='olive' onClick={() =>{
          this.props.computerSelectsUpgrades(this.props.computerDealRoundTwo, this.props.computersHand)
          }}>Done!</Button></Link>
      </div>
    )
  }

  combineDecksAndShuffle = (soldiers, upgrades) =>{
    console.log("taking players' cards out of soldier deck...")
    let playersCards = [...this.props.playersHand, ...this.props.computersHand]
    console.log(playersCards)
    let reducedSoldiers = soldiers.filter(soldier => playersCards.includes(soldier) === false )
    console.log('combining soldiers with upgrades...')
    let combinedDeck = [...reducedSoldiers, ...upgrades]
    let count = combinedDeck.length;
    let t;
    let i;
    while (count){
      i = Math.floor(Math.random() * count--);
      t = combinedDeck[count];
      combinedDeck[count] = combinedDeck[i];
      combinedDeck[i] = t;
    }
    this.props.combineDecks(combinedDeck)
  }
}

const mapStateToProps = (state) =>{
  return { soldiers: state.soldiers,
  playersHand: state.playersHand,
  computersHand: state.computersHand,
  upgrades: state.soldierUpgrades,
  soldierAndUpgradeDeck: state.soldierAndUpgradeDeck,
  computerDealRoundTwo: state.roundTwoComputerDeal,
  combinedDeck: state.soldierAndUpgradeDeck,
  roundTwoPlayerDeal: state.roundTwoPlayerDeal
  }
}

export default connect(mapStateToProps, {
  combineDecks: setCombinedDeck,
  secondComputerDeal: roundTwoComputerDeal,
  secondPlayerDeal: roundTwoPlayerDeal,
  playerAddSoldierOrUpgrade: addSoldierOrUpgradeToPlayersHand,
  playerRemoveSoldier: removeSoldierFromPlayersSecondDeal,
  computerSelectsUpgrades: computerSelectsUpgrades
})(RoundTwo)
