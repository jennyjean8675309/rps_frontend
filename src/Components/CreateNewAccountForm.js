import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, Form, Modal } from 'semantic-ui-react';
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
    this.props.createAccount(new_user_info)
  }

  render(){
    return (
      <div>
        <h2>Create a New Account</h2>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Input icon='user' iconPosition='left' placeholder='Username' type='text' name='username' onChange={(e) => this.handleOnChange(e)} />

          <Form.Input icon='lock' iconPosition='left' placeholder='Password' type='password' name='password' onChange={(e) => this.handleOnChange(e)} />

          <Modal.Actions>
            <Button content='Create' color='olive' type='submit' value='Create' onClick={this.props.modalState}/>
          </Modal.Actions>
        </Form>
      </div>
    )
  }
}

export default connect(null, { createAccount: postingNewUser })(CreateNewAccountForm);
