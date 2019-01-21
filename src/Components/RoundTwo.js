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

        <Button size='large' color='olive' onClick={() =>{
            if (this.state.cardsDealt === false) {
            this.props.secondPlayerDeal(this.props.soldierAndUpgradeDeck)
            this.setState({ cardsDealt: true })
            this.props.secondComputerDeal(this.props.soldierAndUpgradeDeck)}
        }}>
        Deal Me Some More Soldiers
        </Button>

        { this.props.roundTwoPlayerDeal.length > 0 ?
          <div>
            <h2>Click on 5 foot soldier or special ops cards to add them to your army.</h2>

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
          </div>
        : <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div> }
        <h2>Your armies...</h2>

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

        <Link to={this.redirectUser()}><Button size='large' color='olive' onClick={() =>{
          if (this.props.playersHand.length < 6) {
            alert('You must choose at least 1 special ops card or foot soldier before moving onto the next round.')
          } else {
          this.props.computerSelectsUpgrades(this.props.computerDealRoundTwo, this.props.computersHand)
          alert('URGENT MESSAGE FROM THE FRONT LINES: General, the Reconnaissance Team is reporting that The Enemy is ready for attack. You must choose an army to deploy now!')
          }
        }}>Done!</Button></Link>
      </div>
    )
  }

  combineDecksAndShuffle = (soldiers, upgrades) =>{
    let playersCards = [...this.props.playersHand, ...this.props.computersHand]
    let reducedSoldiers = soldiers.filter(soldier => playersCards.includes(soldier) === false )
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

  redirectUser = () =>{
    if (this.props.playersHand.length < 6) {
      return 'round_two'
    } else {
      return '/final_round'
    }
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
