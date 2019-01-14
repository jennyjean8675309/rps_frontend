import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const Home = () =>{
  return (
    <div>
      Welcome to Rock, Paper, Scissors - BATTLE!
      <br></br>
      <Link to='/round_one'><Button size='massive' color='green'>Play the Game!</Button></Link>
    </div>
  )
}

export default Home
