import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const NavBar = (props) =>{
  return (
    <div>
      <NavLink exact to='/how_to_play' activeClassName="active item" className="item">How to Play</NavLink>
        <br></br>
      <NavLink exact to='' activeClassName="active item" className="item">Home</NavLink>
        <br></br>
        { props.currentUser ? <p>Log Out</p> : <NavLink exact to='sign_in' activeClassName="active item" className="item">Sign In</NavLink> }
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(NavBar);
