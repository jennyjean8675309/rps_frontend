import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postingLogin } from '../actions/actions';

class LoginForm extends Component{
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleOnChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    let user_info = {
      username: this.state.username,
      password: this.state.password
    }
    //also need to clear my login form after submit
    //need to dispatch my login action here
    this.props.fetchUser(user_info);
    console.log("submitting user's authentications...")
  }

  render(){
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type='text' name='username' placeholder='username' onChange={(e) => this.handleOnChange(e)}/>
          <br></br>
          <input type='password' name='password' placeholder='password' onChange={(e) => this.handleOnChange(e)}/>
          <br></br>
          <input type='submit' value='Login'/>
        </form>
      </div>
    )
  }
}

export default connect(null, { fetchUser: postingLogin })(LoginForm);
