import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class SoldierCard extends Component {
  render(){
    return (
      <Card id={this.props.soldier.id} onClick={() =>{ this.props.playerAddSoldier(this.props.soldier)
      this.props.playerRemoveSoldier(this.props.soldier)}}>
        <Image src='/images/avatar/large/daniel.jpg' />
          <Card.Content>
            <Card.Header>{this.whichSoldier(this.props.soldier)}</Card.Header>
            <Card.Meta>Soldier Type: {this.whichType(this.props.soldier)}</Card.Meta>
            <Card.Description>Enlist this soldier for 2 points.</Card.Description>
         </Card.Content>
      </Card>
    )
  }

  whichSoldier = (soldier) =>{
    let id = soldier.soldier_type_id
    if (id === 1){
      return 'Pebble'
    } else if (id === 2){
      return 'Looseleaf'
    } else {
      return 'Kid Scissors'
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
