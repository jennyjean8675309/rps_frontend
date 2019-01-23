import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Divider, Grid, Segment, Menu, Modal } from 'semantic-ui-react'
import { logoutUser } from '../actions/actions'
import LoginForm from './LoginForm'
import CreateNewAccountForm from './CreateNewAccountForm'

class NavBar extends Component{
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open : false })

  handleItemClick = (e, { name }) =>{
    this.setState({ activeItem: name})
    if (name === 'log_out'){
      this.logOut(this.props.currentUser)
    }
  }

  changeModalState = () =>{
    console.log('closing modal...')
    if (this.props.currentUser) {
      this.close()
    }
  }

  logOut = (user) =>{
    this.props.logout()
    localStorage.clear()
  }

  render(){
    const { activeItem } = this.state

    return (
      <div>
        <Menu>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} href='/'>Play</Menu.Item>

          <Menu.Item name='how_to_play' active={activeItem === 'how_to_play'} onClick={this.handleItemClick} href='/how_to_play'>How To Play
          </Menu.Item>

          <Menu.Item name='leaderboard' active={activeItem === 'leaderboard'} onClick={this.handleItemClick} href='/leaderboard'>Leaderboard</Menu.Item>

          <Menu.Menu position='right'>
            { this.props.currentUser ? <><Menu.Item>{this.props.currentUser.username}</Menu.Item><Menu.Item name='log_out' active={activeItem === 'log_out'} onClick={this.handleItemClick}>Log Out</Menu.Item></> : <Menu.Item name='sign_in' active={activeItem === 'sign_in'} onClick={this.show('blurring')}>Sign In</Menu.Item> }
          </Menu.Menu>
        </Menu>

        <Modal dimmer={this.state.dimmer} open={this.state.open} onClose={this.close}>
          <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
              <Grid.Column>
                <LoginForm modalState={this.changeModalState}/>
              </Grid.Column>

              <Grid.Column verticalAlign='middle'>
                <CreateNewAccountForm
                modalState={this.changeModalState}/>
              </Grid.Column>
            </Grid>

            <Divider vertical>Or</Divider>
          </Segment>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    currentUser: state.currentUser,
    showLogin: state.showLogin
  }
}

export default connect(mapStateToProps, {
  logout: logoutUser
})(NavBar);
