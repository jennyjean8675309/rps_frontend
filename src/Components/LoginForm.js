import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
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
    this.props.fetchUser(user_info);
  }

  render(){
    return (
      <div>
        <h2>Login</h2>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Input icon='user' iconPosition='left' placeholder='Username' type='text' name='username' onChange={(e) => this.handleOnChange(e)} />

          <Form.Input icon='lock' iconPosition='left' placeholder='Password' type='password' name='password' onChange={(e) => this.handleOnChange(e)} />

          <Button content='Login' color='olive' type='submit' value='Login' ></Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return { currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { fetchUser: postingLogin })(LoginForm);
