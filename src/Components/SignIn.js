import React, { Component } from 'react'
import LoginForm from './LoginForm'
import CreateNewAccountForm from './CreateNewAccountForm'

class SignIn extends Component{
  render(){
    return (
      <div>
        <p>This component is a container that will render both my Login form and my Create New Account form.</p>
        <br></br>
        <p>Login Form</p>
        <LoginForm />
        <br></br>
        <p>Create New Account Form</p>
        <CreateNewAccountForm />
      </div>
    )
  }
}

export default SignIn
