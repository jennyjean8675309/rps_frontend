import React, { Component } from 'react'
import { Divider, Grid, Segment } from 'semantic-ui-react'
import LoginForm from './LoginForm'
import CreateNewAccountForm from './CreateNewAccountForm'

class SignIn extends Component{
  render(){
    return (
      <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <LoginForm />
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
            <CreateNewAccountForm />
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
    )
  }
}

export default SignIn
