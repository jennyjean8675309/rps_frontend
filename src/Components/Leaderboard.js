import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';

class Leaderboard extends Component {
  constructor(){
    super()
    this.state = {
      modalOpen: true
    }
  }

  close = () => this.setState({ modalOpen: false})

  render(){
    return (
      <Modal dimmer='blurring' onClose={this.close} open={this.state.modalOpen}>
        <Modal.Header>
          <h1 className='page-header'>General's Leaderboard</h1>
        </Modal.Header>
        <Modal.Content>
          <h2>High Scores...</h2>
        </Modal.Content>
          {this.filterTopScores().map(user => <Modal.Content><h3>{`${user.username}...${user.high_score}`}</h3></Modal.Content>
          )}
        <Modal.Content>
          <h2>Most Consecutive Wins...</h2>
        </Modal.Content>
          {this.filterMostConsecutiveWins().map(user => <Modal.Content><h3>{`${user.username}...${user.highest_consecutive_wins}`}</h3></Modal.Content>
          )}
        <Modal.Content>
          <h2>Highest Percentage of Wins...</h2>
        </Modal.Content>
          {this.filterHighestWinPercentage().map(user => <Modal.Content><h3>{`${user.username}...${this.findPercentageOfWins(user)}`}</h3></Modal.Content>
          )}
      </Modal>
    )
  }

  filterTopScores = () =>{
    let topScores = this.props.users.sort((a, b) => b.high_score - a.high_score).slice(0, 3)
    console.log('top scores...', topScores)
    return topScores
  }

  filterMostConsecutiveWins = () =>{
    let mostConsWins = this.props.users.sort((a, b) => b.highest_consecutive_wins - a.highest_consecutive_wins).slice(0, 3)
    return mostConsWins
  }

  findPercentageOfWins = (user) =>{
    let games = (user.wins + user.losses)
    let percentage = Math.floor((user.wins / games) * 100)
    return percentage
  }

  filterHighestWinPercentage = () =>{
    let highestWinPercentages = this.props.users.sort((a, b) => this.findPercentageOfWins(b) - this.findPercentageOfWins(a)).slice(0, 3)
    return highestWinPercentages
  }
}

const mapStateToProps = (state) =>{
  return {
    users: state.users,
    user: state.currentUser
  }
}

export default connect(mapStateToProps)(Leaderboard);
