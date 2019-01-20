import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Modal } from 'semantic-ui-react'
import { logoutUser } from '../actions/actions'
import SignIn from './SignIn'

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
    if (this.props.currentUser !== null) {
      console.log('closing modal...')
      this.close()
    }
  }

  //This function is being called but doesn't recognize currentUser update

  logOut = (user) =>{
    console.log('logging out...', user)
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

          <Menu.Menu position='right'>
            { this.props.currentUser ? <><Menu.Item>{this.props.currentUser.username}</Menu.Item><Menu.Item name='log_out' active={activeItem === 'log_out'} onClick={this.handleItemClick}>Log Out</Menu.Item></> : <Menu.Item name='sign_in' active={activeItem === 'sign_in'} onClick={this.show('blurring')}>Sign In</Menu.Item> }
          </Menu.Menu>
        </Menu>

        <Modal dimmer={this.state.dimmer} open={this.state.open} onClose={this.close}>
          <SignIn
            modalState={this.changeModalState}
          />
        </Modal>
      </div>

  )}
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
