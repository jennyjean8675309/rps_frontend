import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class SoldierCard extends Component {
  render(){
    return (
      <Card>
        <Image src={require(`../images/soldier-${this.props.soldier.points}-${this.props.soldier.soldier_type_id}.jpg`)} size='medium' />
          <Card.Content>
            <Card.Header>{this.whichSoldier(this.props.soldier)[0]}</Card.Header>
            <Card.Meta>{this.whichSoldier(this.props.soldier)[1]}</Card.Meta>
            <Card.Meta>{`${this.props.soldier.points} points`}</Card.Meta>
            <Card.Description>{this.whichSoldier(this.props.soldier)[2]}</Card.Description>
         </Card.Content>

         <Card.Content extra className='army-type'>
           {`Platoon: ${this.whichType(this.props.soldier)}`}
         </Card.Content>
      </Card>
    )
  }

  whichSoldier = (soldier) =>{
    let id = soldier.soldier_type_id
    if (id === 1){
      if (soldier.points === 2){
        return ['Pebble', 'Foot Soldier', "Pebble may annoy you if he sits in your shoe, but even a lowly ticket stub could cover him up."]
      } else {
        return ['Stone', 'Special Ops', "This soldier's been around the block a few times - and he will give you a concussion if you give him reason to."]
      }
    } else if (id === 2){
      if (soldier.points === 2){
        return ['Looseleaf', 'Foot Soldier', "A non-fatal paper cut is about all the harm Looseleaf could do you."]
      } else {
        return ['Laminated', 'Special Ops', "Try putting this guy in your paper shredder and you'll rue the day you were born."]
      }
    } else {
      if (soldier.points === 2){
        return ['Safety Scissors', 'Foot Soldier', "Safety Scissors won't cut your fingers, and he can barely handle construction paper."]
      } else {
        return ['Pointy Scissors', 'Special Ops', "This guy's sharp - both figuratively and literally. You don't want to meet him on the battlefield."]
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
