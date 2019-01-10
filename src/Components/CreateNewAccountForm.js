import React, { Component } from 'react'
import { connect } from 'react-redux';
import { postingNewUser } from '../actions/actions';

class CreateNewAccountForm extends Component{
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
    e.preventDefault()
    let new_user_info = { user: {
      username: this.state.username,
      password: this.state.password,
      high_score: 0
    }
    }
    //need to dispatch my post new user action here
    this.props.createAccount(new_user_info)
    console.log('handling new account...', new_user_info)
  }

  render(){
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type='text' name='username' placeholder='username' onChange={(e) => this.handleOnChange(e)}/>
          <br></br>
          <input type='password' name='password' placeholder='password' onChange={(e) => this.handleOnChange(e)}/>
          <br></br>
          <input type='submit' value='Create' />
        </form>
      </div>
    )
  }
}

export default connect(null, { createAccount: postingNewUser })(CreateNewAccountForm);
