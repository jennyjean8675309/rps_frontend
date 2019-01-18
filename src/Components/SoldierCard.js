import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class SoldierCard extends Component {
  render(){
    return (
      <Card >
        <Image src='/images/avatar/large/daniel.jpg' />
          <Card.Content>
            <Card.Header>{this.whichSoldier(this.props.soldier)}</Card.Header>
            <Card.Meta>Soldier Type: {this.whichType(this.props.soldier)}</Card.Meta>
            <Card.Description>{this.howManyPoints(this.props.soldier)}</Card.Description>
         </Card.Content>
      </Card>
    )
  }

  howManyPoints = (soldier) =>{
    let id = soldier.soldier_type_id
    if (id === 1){
      if (soldier.points === 2){
        return 'Enlist this soldier for 2 points'
      } else {
        return 'Upgrade any Pebble for an additional 3 points'
      }
    } else if (id === 2){
      if (soldier.points === 2){
        return 'Enlist this soldier for 2 points'
      } else {
        return 'Upgrade any Looseleaf for an additional 3 points'
      }
    } else {
      if (soldier.points === 2){
        return 'Enlist this soldier for 2 points'
      } else {
        return 'Upgrade any Kid Scissors for an additional 3 points'
      }
    }
  }

  whichSoldier = (soldier) =>{
    let id = soldier.soldier_type_id
    if (id === 1){
      if (soldier.points === 2){
        return 'Pebble'
      } else {
        return 'Stone'
      }
    } else if (id === 2){
      if (soldier.points === 2){
        return 'Looseleaf'
      } else {
        return 'Laminated'
      }
    } else {
      if (soldier.points === 2){
        return 'Kid Scissors'
      } else {
        return 'Pointy Scissors'
      }
    }
  }

  whichType = (soldier) =>{
    let id = soldier.soldier_type_id
    if (id === 1){
      return 'Rock'
    } else if (id === 2){
      return 'Paper'
    } else {
      return 'Scissors'
    }
  }
}

export default SoldierCard
