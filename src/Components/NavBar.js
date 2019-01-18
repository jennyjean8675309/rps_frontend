import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { logoutUser } from '../actions/actions'

class NavBar extends Component{
  state = {}

  handleItemClick = (e, { name }) =>{
    this.setState({ activeItem: name})
    if (name === 'log_out'){
      this.logOut(this.props.currentUser)
    }
  }

  logOut = (user) =>{
    console.log('logging out...', user)
    this.props.logout()
    localStorage.clear()
  }

  render(){
    const { activeItem } = this.state

    return (
    <Menu>
      <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} href='/'>Home
      </Menu.Item>

      <Menu.Item name='how_to_play' active={activeItem === 'how_to_play'} onClick={this.handleItemClick} href='/how_to_play'>How To Play
      </Menu.Item>

      <Menu.Menu position='right'>
        { this.props.currentUser ? <><Menu.Item>{this.props.currentUser.username}</Menu.Item><Menu.Item name='log_out' active={activeItem === 'log_out'} onClick={this.handleItemClick}>Log Out</Menu.Item></> : <Menu.Item name='sign_in' active={activeItem === 'sign_in'} onClick={this.handleItemClick} href='/sign_in'>Sign In</Menu.Item> }
      </Menu.Menu>
    </Menu>
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
