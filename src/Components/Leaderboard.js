import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal, List, Button } from 'semantic-ui-react';

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
    <div>
      <Modal dimmer='blurring' onClose={this.close} open={this.state.modalOpen}>
        <Modal.Header>
          <h1 className='page-header'>General's Leaderboard</h1>
        </Modal.Header>
        <Modal.Content>
          <h2 className='leaderboard-title one'>High Scores...</h2>

          <List divided verticalAlign='middle'>
            {this.filterTopScores().map(user => <>
            <List.Item>
              <List.Content floated='right'>
              <h3>{user.high_score}</h3>
              </List.Content>

              <List.Content>
              <h3>{user.username}</h3>
              </List.Content>
            </List.Item>
          </>
            )}
          </List>

          <h2 className='leaderboard-title' id='two'>Most Consecutive Wins...</h2>

          <List divided verticalAlign='middle'>
            {this.filterMostConsecutiveWins().map(user => <>
            <List.Item>
              <List.Content floated='right'>
              <h3>{user.highest_consecutive_wins}</h3>
              </List.Content>

              <List.Content>
              <h3>{user.username}</h3>
              </List.Content>
            </List.Item>
          </>
            )}
          </List>


          <h2 className='leaderboard-title' id='three'>Highest Percentage of Wins...</h2>

          <List divided verticalAlign='middle'>
            {this.filterHighestWinPercentage().map(user => <>
            <List.Item>
              <List.Content floated='right'>
              <h3>{`${this.findPercentageOfWins(user)}%`}</h3>
              </List.Content>

              <List.Content>
              <h3>{user.username}</h3>
              </List.Content>
            </List.Item>
          </>
            )}
          </List>
        </Modal.Content>
      </Modal>

      <Link to='/home' ><Button size='large' color='purple' id='button'>Play the Game</Button></Link>
    </div>
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
